#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
Plantilla de archivo para trabajar en los distintos proyectos de LUISA
Esta plantilla no hace mas que abrir una lista de archivos, leerlos uno
por uno y guardar una copia en un directorio especificado.

Los requisitos mínimos para correr este script es tener instalados
los siguientes paquetes de Python 3.
Se recomienda utilizar el manejador de paquetes de Python3, pip3:

numpy
pillow 
matplotlib

Se recomienda también el siguiente paquete:

scipy

@author: nacho
"""
#
# # paquetes base de Python3 (ya vienen con Python)
#
# import os
import os.path
import sys
import time
import argparse
import math
import scipy.signal as dsp

#
# bibliotecas adicionales necesarias
#
import numpy as np
from PIL import Image,ImageOps,ImageChops,ImageDraw
import matplotlib.pyplot as plt
from scipy import ndimage, misc
from skimage import transform
import posixpath

def imrot(img,angle):
    w,h = img.size
    return img.rotate(angle, resample=Image.NEAREST,expand=True,fillcolor=1)
def imread(fname):
    img = Image.open(fname)
    if fname.endswith('tif') and img.tag_v2[274] == 8: # regression bug in PILLOW for TIFF images
        img = imrot(img,-90)
    return 1-np.asarray(img,dtype=np.uint8)


def achicar(a,proporcion):
	ares =  transform.rescale(a.astype(np.float),1/proporcion,order=1,mode='constant',cval=0,anti_aliasing=False)
	salida = (ares > 0).astype(np.bool)
#	plt.imshow(a, interpolation='nearest')
#	plt.show()
#	plt.imshow(salida, interpolation='nearest')
#	plt.show()
		
	return salida

def listaz(a,proporcion):
	salida = []
	salida.append(a)
	i = 1
	aa = np.copy(a)
	while i<proporcion:
		i = i*2
		aa = achicar(aa,2)
		salida.append(aa)
	return salida
	
def detector_bitabit(img,seals):
	ESCALAS = 256
	det = np.zeros(len(seals),dtype=np.float)
	tolerancia = 0.4
	isello = 0
	#armo la lista con la imagen en las distintas escalas
	limgz = listaz(img,ESCALAS)
	limgz = limgz[::-1]
	for sello in seals:
		#plt.imshow(img, interpolation='nearest')
		#plt.show()
		#plt.imshow(sello, interpolation='nearest')
		#plt.show()
		imaximo = 0
		jmaximo = 0
		resultados = []
		for angulo in range(-10,10):
			#se va a agrandar un poco la imagen, y rellena con 0 en los bordes, así que los bordes no generan error
			s = ndimage.rotate(sello,angulo, reshape=True)
			
			#armo la lista con el sello en las distintas escalas
			lsz = listaz(s,ESCALAS)
			lsz = lsz[::-1]
			
			sz = lsz[0]
			imgz = limgz[0]
			(largos,anchos) = np.shape(sz)
			(largo,ancho) = np.shape(imgz)
			sumasello = np.sum(sz)
			validos = []
			if sumasello>0:
				for i in range(largo-largos):
					for j in range(ancho-anchos):
						corte = imgz[i:largos+i,j:anchos+j]
						suma = np.sum(np.logical_and(corte == 1, sz == 1))
						#sumacorte = np.sum(corte)
						#if sumacorte!=0 and ((suma*suma)/(sumasello*sumacorte))>=tolerancia:
						if (suma/sumasello)>=tolerancia:
							validos.append((i,j,suma/sumasello))
			
			proporcion = ESCALAS
			ii = 1
			while proporcion>1 and len(validos)>0:
				proporcion = proporcion/2
				#print(f'sello {isello} angulo {angulo} : proporcion {proporcion} validar: {len(validos)}')
				sz = lsz[ii]
				imgz = limgz[ii]
				ii = ii+1
				sumasello = np.sum(sz)
				#plt.imshow(sz, interpolation='nearest')
				#plt.show()
				#plt.imshow(imgz, interpolation='nearest')
				#plt.show()
				(largos,anchos) = np.shape(sz)
				(largo,ancho) = np.shape(imgz)
				vds = []
				for (i,j,margen) in validos:
					i = i*2
					j = j*2
					
					if (largos+i)<=largo and (anchos+j)<=ancho:
						corte = imgz[i:largos+i,j:anchos+j]
						suma = np.sum(np.logical_and(corte == 1, sz == 1))

						if (suma/sumasello)>=tolerancia:
							vds.append((i,j,suma/sumasello))

						if (largos+i+1)<=largo:
							corte = imgz[(i+1):(largos+i+1),j:anchos+j]
							suma = np.sum(np.logical_and(corte == 1, sz == 1))
							if (suma/sumasello)>=tolerancia:
								vds.append((i+1,j,suma/sumasello))
						
						if (anchos+j+1)<=ancho:
							corte = imgz[i:largos+i,(j+1):anchos+j+1]
							suma = np.sum(np.logical_and(corte == 1, sz == 1))
							if (suma/sumasello)>=tolerancia:
								vds.append((i,j+1,suma/sumasello))
						
						if (anchos+j+1)<=ancho and (largos+i+1)<=largo:
							corte = imgz[i+1:largos+i+1,j+1:anchos+j+1]
							suma = np.sum(np.logical_and(corte == 1, sz == 1))
							if (suma/sumasello)>=tolerancia:
								vds.append((i+1,j+1,suma/sumasello))

				validos = vds
			maximo = 0
			imaximo = 0
			jmaximo = 0
			#print(f' rotacion {angulo}')
			#print(validos)
			for (i,j,margen) in validos:
				if margen>maximo:
					imaximo = i
					jmaximo = j
					maximo = margen
			if(maximo>0):
				resultados.append((imaximo,jmaximo,maximo))
		
		maximo = 0
		imaximo = 0
		jmaximo = 0
		for (i,j,margen) in resultados:
			if margen>maximo:
				imaximo = i
				jmaximo = j
				maximo = margen

		#esta parte es solo para mostrar
		mostrar = 1
		if mostrar==1:
			#if maximo>tolerancia :		
			#print(f'maximo {maximo}')
			(largos,anchos) = np.shape(sello)
			copia = np.copy(img)
			for x in range(largos):
				for y in range(anchos):
					if copia[x+imaximo][y+jmaximo]==1:
						copia[x+imaximo][y+jmaximo] = 0
					else:
						copia[x+imaximo][y+jmaximo] = 1
			#print(f'maximo: {maximo}')
			#plt.imshow(sello, interpolation='nearest')
			#plt.show()
			#plt.imshow(copia, interpolation='nearest')
			#plt.show()
		det[isello] = maximo
		isello = isello+1
	return det



def evaluar_detectores(img,seals,methods):
    return [ m(img,seals) for m in methods]
#---------------------------------------------------------------------------------------
def detector_nulo(img,seals):
    det = np.zeros(len(seals),dtype=np.float)
    return det
if __name__ == '__main__':
    #
    # ARGUMENTOS DE LINEA DE COMANDOS
    #
    ap = argparse.ArgumentParser()
    ap.add_argument("-d", "--datadir", type=str, default=posixpath.normpath("../datos"),
		    help="path prefix  where to find files")
    ap.add_argument("-o","--outdir", type=str, default=posixpath.normpath("../results"),
		    help="where to store results")
    ap.add_argument("-l","--list", type=str, default=posixpath.normpath("../datos/r0566.list"),
		    help="text file where input files are specified")
    ap.add_argument("-s","--seals", type=str, default=posixpath.normpath("../datos/sellos.list"),
		    help="text file with the list of input seal image files")
    ap.add_argument("-t","--truth", type=str, default=posixpath.normpath("../datos/sellos_gt.csv"),
		    help="ground truth file.")
    args = vars(ap.parse_args())
    #
    # INICIALIZACION
    #
    prefix = args["datadir"]
    outdir = args["outdir"]
    #
    # cargamos sellos
    #
    seals_file = args["seals"]
    sellos = list()
    with open(seals_file) as fl:
        nimage = 0
        for relfname in fl:
            nimage = nimage+1
            relfname = relfname.rstrip('\n')
            reldir,fname = os.path.split(relfname)
            fbase,fext = os.path.splitext(fname)
            input_fname = os.path.join(prefix,relfname)
            print(f'cargando sello #{nimage} fname={input_fname}')
            sellos.append(imread(input_fname))
    #
    # armamos lista de detectores a evaluar
    #
    detectores = (detector_bitabit,detector_nulo)

    #
    # abrimos lista de archivos
    # la lista es un archivo de texto con un nombre de archivo
    # en cada linea
    #
    list_file = args["list"]
    with open(list_file) as fl:
        t0 = time.time()
        nimage = 0
        #
        # repetimos una cierta operación para cada archivo en la lista
        #
        for relfname in fl:
            relfname = relfname.split('.')[0]+".tif"
            #
            # proxima imagen
            #
            nimage = nimage + 1        
            #
            # nombres de archivos y directorios de entrada y salida
            #
            relfname = relfname.rstrip('\n')
            reldir,fname = os.path.split(relfname)
            fbase,fext = os.path.splitext(fname)
            foutdir = os.path.join(outdir,reldir)
            debugdir = os.path.join(foutdir,fbase + "_debug")            
            print(f'#{nimage} image={fbase}', flush=True)
            #
            # creamos carpetas de destino si no existen
            #
            if not os.path.exists(foutdir):
                os.makedirs(foutdir)

            output_fname = os.path.join(foutdir,fname)
            input_fname = os.path.join(prefix,relfname)
            #
            # leemos imagen
            #
            img = imread(input_fname)
            #---------------------------------------------------
            # hacer algo en el medio
            #---------------------------------------------------
            truth = np.zeros(len(sellos),dtype=np.float)
            detecciones = evaluar_detectores(img, sellos, detectores)
            print(detecciones, flush=True)
            #---------------------------------------------------
        #
        # fin para cada archivo en la lista
        #
    #
    # fin main
    #
    
#---------------------------------------------------------------------------------------
