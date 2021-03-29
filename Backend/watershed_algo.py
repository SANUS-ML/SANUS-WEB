import cv2 as cv
import numpy as np
from PIL import Image

def watershed(fileName):
    img = cv.imread(fileName,1)
    Img = np.array(img)
    gray = cv.cvtColor(np.array(img), cv.COLOR_BGR2GRAY)
    ret, thresh = cv.threshold(gray, 0, 255, cv.THRESH_BINARY_INV + cv.THRESH_OTSU)
    kernel = np.ones((3, 3), np.uint8)
    opening = cv.morphologyEx(thresh, cv.MORPH_OPEN, kernel, iterations=2)
    sure_bg = cv.dilate(opening, kernel, iterations=3)
    dist_transform = cv.distanceTransform(opening, cv.DIST_L2, 5)
    ret, sure_fg = cv.threshold(dist_transform, 0.7 * dist_transform.max(), 255, 0)
    sure_fg = np.uint8(sure_fg)
    unknown = cv.subtract(sure_bg, sure_fg)
    ret, markers = cv.connectedComponents(sure_fg)
    markers = markers + 1
    markers[unknown == 255] = 0
    markers = cv.watershed(Img, markers)
    Img[markers == -1] = [255, 0, 0]
    tumorImage = cv.cvtColor(Img, cv.COLOR_HSV2BGR)
    ws = Image.fromarray(tumorImage, 'RGB')
    ws.save("static/"+ str(fileName.split("/")[-1].split(".")[0])+'_rgb.jpg')
    # ws.show()
    return str(fileName.split("/")[-1].split(".")[0])+'_rgb.jpg'
    # return ws
    # cv.imshow('tumor_image',tumorImage)
    # k=cv.waitKey(0)
    # cv.destroyAllWindows()