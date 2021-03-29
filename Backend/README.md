# Backend - Flask Server

## How to run the server
```
1. cd Backend

2. python3 -m pip install --user virtualenv (In Mac or Linux)
   python -m pip install --user virtualenv (In Windows) 
   
   [Make sure Python3 is installed in your system]

3. python3 -m venv env (In Mac or Linux)
   python -m venv env (In Windows) 
   
4. source env/bin/activate  (In Mac or Linux)
   .\env\Scripts\activate (In Windows) 
   
5. pip3 install -r requirements.txt (In Mac or Linux)
   pip install -r requirements.txt (In Windows)
   
6. python3 app.py (In Mac or Linux)
   python app.py (In Windows)
```
**Note:** After running this commands and following this instructions carefully, you need to [Click Here](https://github.com/SANUS-ML/SANUS-WEB/blob/master/Frontend/README.md)

## Project Structure
```
.
├── README.md
├── .gitignore
├── .gitattributes
├── app.py
├── watershed_algo.py
├── requirements.txt
├── test_images
│   ├── Brain Tumor Detection/
│   ├── Malaria Detection/
│   ├── Pneumonia Detection/
│   └── Skin Cancer/
├── model/
│   ├── Pneumonia-DENSENET.h5
│   ├── heart_model .pkl
│   ├── keras_model.h5
│   ├── skin.h5
│   ├── tumor_prediction.h5
│   └── malariaModel.h5
└── static/

325 directories, 8116 files
```
# Thank You!
