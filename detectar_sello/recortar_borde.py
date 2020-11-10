#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cv2
import numpy as np
from PIL import Image,ImageOps,ImageChops,ImageDraw
import matplotlib.pyplot as plt

def imrot(img,angle):
    w,h = img.size
    return img.rotate(angle, resample=Image.NEAREST,expand=True,fillcolor=1)

def imread(fname):
    img = Image.open(fname)
    if fname.endswith('tif') and img.tag_v2[274] == 8: # regression bug in PILLOW for TIFF images
        img = imrot(img,-90)
    return 1-np.asarray(img,dtype=np.uint8)
def sacarBarras(img):
	s1 = np.sum(img)
	contours,hierarchy = cv2.findContours(img, cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
	for cnt in contours:
		area = cv2.contourArea(cnt)
		if area >50000:
			img2 = img.copy()
			img2 = cv2.fillPoly(img2, pts =[cnt], color=(0))
			s2 = np.sum(img2)
			promedio = ((s1-s2)/area)
			if promedio>0.9:
				print("sustitui")
				img = img2
				si = s2
	return img
if __name__ == '__main__':
	img = imread("../datos/r0566/r0566_0185.tif")
	plt.imshow(img, interpolation='nearest')
	plt.show()
	img2 = sacarBarras(img)
	plt.imshow(img2, interpolation='nearest')
	plt.show()

