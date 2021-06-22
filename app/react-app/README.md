# LUISA React

En este módulo se enmarca la aplicación web de [LUISA](https://mh.udelar.edu.uy/luisa/?lang=es).

## Comandos y parámetros de configuración

En esta sección se ven comandos comunes tanto para realizar el deploy a producción como para desarrollar.

### `npm install`

Ejecuta la primera vez que realizamos la instalacion del ambiente de desarrollo, necesario para que npm descargue todas las librerias necesarias.

### `npm start`

Ejecuta la aplicación en modo development de React, típicamente utilizado para desarrollo.

Acceder a la app a través del siguiente link en el navegador [http://localhost:3000](http://localhost:3000).

La página se recarga automáticamente si se realizan cambios en los archivos js de React.\
Se pueden ver los errores de la app React en la consola del navegador.

### `npm run build`

Crea la aplicación para producción bajo la carpeta `build`.\
Estos archivos ya se encuentran minificados para ser desplegados a producción.

### `tar -czvf luisa.tar.gz build`

Comando para crear luisa.tar.gz a partir de un build generado.\
Por ejemplo, para crear el `build` para testing (u otro ambiente con contexto) debemos especificar la variable `PUBLIC_URL`, ejecutar `npm run build` y este último comando para generar el tar.gz deseado.

## Archivos de configuracion de entorno

La configuración de los distintos ambientes está impactada en los archivos `.env` de esta misma carpeta.

### `.env`

Valores por defecto de las variables definidas.
Típicamente utilizadas al levantar el ambiente de desarrollo.

### `.env.local`

Valores para el ambiente local.
Ya sea al levantar el ambiente de desarrollo, o crear una nueva carpeta `build` para deploy, los valores aqui sobreescribirán todos los valores del resto de archivos.
Está agregado al `.gitignore` ya que es utilizado para configuraciones particulares del ambiente de ejecución local o particular (ej. testing).

### `.env.local.produccion`

Valores  de las variables definidas en `npm run build`.
Estos valores son los que se utilizaran en producción.

## Variables de entorno

Las variables REACT_APP son las definidas por la aplicación, el resto son definidas por React.

### `REACT_APP_NOT_BACKEND_URL`

URL base donde se aloja el servicio de backend para consumo y envio de imagenes.\
Esto será invocando por AJAX, ver `Images.js`

### `REACT_APP_INTEGRATION_MODE`

En caso de querer invocar LUISA contra el backend implementado en CSV (sandbox), colocar el valor CSV.\
Por el contrario, si se quiere invocar LUISA contra el backend actual implementado en python con HTML, colocar el valor HTML.

