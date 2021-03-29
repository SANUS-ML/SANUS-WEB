from __future__ import division, print_function
import sys
import os
import glob
import re
import numpy as np
import joblib
import cv2
from watershed_algo import watershed
from PIL import Image, ImageOps

from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
from tensorflow.keras.models import load_model 
from keras.models import load_model as kl
from tensorflow.keras.preprocessing import image
from tensorflow.python.keras.applications.vgg16 import preprocess_input
from flask import Flask, redirect, url_for, request, render_template
import tensorflow as tf


# Define a flask app
app = Flask(__name__, template_folder='static')

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
lst = ['Malignant','Beningn','no skin ']
# Disable scientific notation for clarity
np.set_printoptions(suppress=True)

brainmodel = kl("./model/tumor_prediction.h5")  
pneumoniamodel = load_model("./model/Pneumonia-DENSENET.h5")  
malarialmodel = kl("./model/malariaModel.h5")         # Necessary

def maleriamodel_predict(img_path, model):
    img = image.load_img(img_path, target_size=(130, 130))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    x = np.expand_dims(x, axis=0)

    # Be careful how your trained model deals with the input
    # otherwise, it won't make correct prediction!
    # x = preprocess_input(x, mode='caffe')
    images = np.vstack([x])

    preds = malarialmodel.predict(images, batch_size=16)
    print(preds)
    return preds

def HeartValuePredictor(to_predict_list, size):
    to_predict = np.array(to_predict_list).reshape(1,size)
    if(size==7):
        loaded_model = joblib.load(r'./model/heart_model.pkl')
        result = loaded_model.predict(to_predict)
    return result[0]

def pneumoniamodel_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocessing the image
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)

    x = x / 255.0 

    preds = model.predict(x)
    return preds

def brainmodel_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    x = np.expand_dims(x, axis=0)

    # Be careful how your trained model deals with the input
    # otherwise, it won't make correct prediction!
    images = preprocess_input(x)
    # images = np.vstack([x])

    preds = model.predict(images, batch_size=16)
    return preds

@app.route('/', methods=['GET'])
def homepage():
    # Main page
    return render_template('base/index.html')

@app.route('/pneumonia/', methods=['GET'])
def pneumonia():
    # Main page
    return render_template('pneumonia/home.html')

@app.route('/pneumonia/home.html', methods=['GET'])
def pneumoniahome():
    # Main page
    return render_template('pneumonia/home.html')

@app.route('/pneumonia/test',methods=['GET'])
def pneumoniatest():
    return render_template('pneumonia/predict.html')


@app.route('/pneumonia/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST': 
        print("hanji-------------------------")       
 
        # Get the file from post request
        f = request.files['file']
       
        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = pneumoniamodel_predict(file_path, pneumoniamodel)

        # Process your result for human
        # pred_class = preds.argmax(axis=-1)            # Simple argmax
        pred_class = preds.argmax(axis = 1)   # ImageNet Decode
        if(pred_class[0] == 0):
            answer = "Normal"
        else:
            answer = "Pneumonia"
        result = answer               # Convert to string
        return result
    return None

@app.route("/heart/test", methods=['GET'])
def cancer():
    return render_template("heart/index.html")

@app.route('/heart/predict', methods = ["POST"])
def predict():
    if request.method == "POST":
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(float, to_predict_list))
         #diabetes
        if(len(to_predict_list)==7):
            result = HeartValuePredictor(to_predict_list,7)
    
    if(int(result)==1):
        prediction = "Sorry you chances of getting the disease. Please consult the doctor immediately"
    else:
        prediction = "No need to fear. You have no dangerous symptoms of the disease"
    return(render_template("heart/result.html", prediction_text=prediction))   

@app.route('/malaria/test', methods=['GET'])
def malaria():
    # Main page
    return render_template("malaria/index.html")

@app.route('/malaria/predict', methods=['GET', 'POST'])
def malariaupload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = maleriamodel_predict(file_path, malaria)

        # Process your result for human
        # pred_class = preds.argmax(axis=-1)            # Simple argmax
        # pred_class = decode_predictions(preds, top=1)   # ImageNet Decode
        result = str(preds[0])
        if preds > 0:
            return "Uninfected"
        else:  # Convert to string
            return "Infected"
    return None    


@app.route("/skin/test" ,methods=['GET'])
def skin():
    return render_template("skin/upload.html")

@app.route("/skin/predict", methods=["POST"])
def skinupload():
    target = os.path.join(APP_ROOT, 'static')
    print(target)
    if not os.path.isdir(target):
            os.mkdir(target)
    else:
        print("Couldn't create upload directory: {}".format(target))
    print(request.files.getlist("file"))
    for upload in request.files.getlist("file"):
        print(upload)
        print("{} is the file name".format(upload.filename))
        filename = upload.filename
        destination = "/".join([target, filename])
        print ("Accept incoming file:", filename)
        print ("Save it to:", destination)
        upload.save(destination)
    # Load the model
    skinmodel = load_model('./model/skin.h5',compile=False)
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    # Replace this with the path to your image
    folder='static'
    ex=folder+'/'+filename
    image = Image.open(ex)
    img=cv2.imread(ex)
    img = cv2.resize(img, (0, 0), fx = 0.2, fy = 0.2)

    #resize the image to a 224x224 with the same strategy as in TM2:
    #resizing the image to be at least 224x224 and then cropping from the center
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #turn the image into a numpy array
    image_array = np.asarray(image)
    if len(image_array.shape) == 2: # ----------------Change here
        image_array.resize(224, 224, 1)

    # display the resized image
    #image.show()

    #cv2_imshow(img)
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # Load the image into the array
    data[0] = normalized_image_array 

    # run the inference
    prediction = skinmodel.predict(data)
    #print(type(prediction))
    prediction = list(prediction)

    print(prediction)
    class1=round(prediction[0][0]*100,2)
    class2=round(prediction[0][1]*100,2)
    class3=round(prediction[0][2]*100,2)
    print(class1,class2,class3)
    return render_template("skin/result.html",image_name=filename,class1=class1,class2=class2,class3=class3)

@app.route("/brain/test" ,methods=['GET'])
def brain():
    # Main page
    return render_template('brain/index.html')

@app.route('/brain/predict', methods=['GET', 'POST'])
def brainTumor(): 
    target = os.path.join(APP_ROOT, 'static/')
    print(target)
    if not os.path.isdir(target):
            os.mkdir(target)
    else:
        print("Couldn't create upload directory: {}".format(target))
    print(request.files.getlist("file"))
    for upload in request.files.getlist("file"):
        print(upload)
        print("{} is the file name".format(upload.filename))
        filename = upload.filename
        destination = "/".join([target, filename])
        print ("Accept incoming file:", filename)
        print ("Save it to:", destination)
        upload.save(destination)
    # Load the model
    model = tf.keras.models.load_model('./model/keras_model.h5',compile=False)
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    # Replace this with the path to your image
    folder='static'
    ex=folder+'/'+filename
    image = Image.open(ex)
    img=cv2.imread(ex)
    img = cv2.resize(img, (0, 0), fx = 0.2, fy = 0.2)

    #resize the image to a 224x224 with the same strategy as in TM2:
    #resizing the image to be at least 224x224 and then cropping from the center
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #turn the image into a numpy array
    image_array = np.asarray(image)
    if len(image_array.shape) == 2: # ----------------Change here
        image_array.resize(224, 224, 1)

    # display the resized image
    #image.show()

    #cv2_imshow(img)
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1

    # Load the image into the array
    data[0] = normalized_image_array 

    # run the inference
    prediction = model.predict(data)
    # watershed(ex)
    #print(type(prediction))
    prediction = list(prediction)

    print(prediction)
    class1=round(prediction[0][0]*100,2)
    class2=round(prediction[0][1]*100,2)    
    class3=round(prediction[0][2]*100,2)   
    WTSNAME = watershed(ex)
    print(filename)
    print(WTSNAME)
    print(class1,class2,class3)
    return render_template("brain/result.html",org_name=filename,class1=class1,class2=class2,class3=class3, wts_name=WTSNAME)    


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)