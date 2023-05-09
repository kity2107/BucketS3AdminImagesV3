<em> # Bucket S3</em>

<em> https://documenter.getpostman.com/view/15401227/2s93eZyWyG </em>

Este servicio fue creado con la idea de poder subir, listar, buscar por nombre, descargar por nombre y descargar la url de una imagen dandole un tiempo de expiracion en seg.

## Indice

-   [Setup](#setup)
-   [Start](#start)
-   [Endpoints](#endpoints)

<a name="setup"></a>

## Setup

Clonar el proyecto, navegar a la carpeta e instalarlo

git clone ....

cd s3

npm i

<a name="start"></a>

## Start

Una vez instaladas las dependencias para iniciar el servicio lo hacemos con

npm run dev

Por defecto el servicio se inicia en http:localhost:5000
Se puede cambiar esta configuración desde el .env

<a name="endpoints"></a>

## Endpoints

Actualmente el servicio cuenta con los siguientes endpoints:

-   [/image](#image)
-   [/listimages](#listimages)
-   [/image/:fileName](#image)
-   [/downloadimage/:fileName](#downloadimage)
-   [/imageurl/:fileName](#imageurl)

<a name="image"></a>

## image :

POST: /image Respuesta al subir una nueva imagen al bucket.

\_Ejemplo de respusta:
{
"error": "",
"body": {
"$metadata": {
"httpStatusCode": 200,
"requestId": "HM9VCYZK1T42BFWN",
"extendedRequestId": "haelzD/v3ByZWs8j3Ev37K2v1Jr+6sLbjdtn2z+8+0ZA0n8IFayTZ9RIlFng7og+XB0sl8P0w4ZdKVLKPbHr5A==",
"attempts": 1,
"totalRetryDelay": 0
},
"ETag": "\"f056ffbbb09e918c8ce8b344e0b2d0a8\"",
"ServerSideEncryption": "AES256"
}
}

<a name="/listimages"></a>

## listimages

-   GET: /listimages Responde listando los elementos/imagenes del bucket

\_Ejemplo de respusta:
{
"error": "",
"body": {
"$metadata": {
"httpStatusCode": 200,
"requestId": "1908HJ2WTEFWT0FY",
"extendedRequestId": "AZJb5ruty6/lkE2wvihpmedWYqj1ztp8mk3RQhUfURiqCYiLm0z3nPsnDMVNrNVZrt5fQpTBhwy10V+yHMOYaw==",
"attempts": 1,
"totalRetryDelay": 0
},
"Contents": [
{
"Key": "ellos.jpg",
"LastModified": "2023-05-09T19:35:03.000Z",
"ETag": "\"52bb91fb853a92a1945b0e2fdee81162\"",
"Size": 4527,
"StorageClass": "STANDARD",
"Owner": {
"ID": "3cbbcfdba377d9788609758574de4e257b0c1400214e011c3c0a5b20c4295b72"
}
},
{
"Key": "fondo.png",
"LastModified": "2023-05-09T22:25:05.000Z",
"ETag": "\"f056ffbbb09e918c8ce8b344e0b2d0a8\"",
"Size": 532406,
"StorageClass": "STANDARD",
"Owner": {
"ID": "3cbbcfdba377d9788609758574de4e257b0c1400214e011c3c0a5b20c4295b72"
}
},
{
"Key": "sonido2.jpeg",
"LastModified": "2023-05-03T12:04:32.000Z",
"ETag": "\"ddfdf253c76658ccb80c588306e85c35\"",
"Size": 80696,
"StorageClass": "STANDARD",
"Owner": {
"ID": "3cbbcfdba377d9788609758574de4e257b0c1400214e011c3c0a5b20c4295b72"
}
}
],
"IsTruncated": false,
"Marker": "",
"MaxKeys": 1000,
"Name": "storageapi1985",
"Prefix": ""
}
}

<a name="/image/:fileName"></a>

## Search image by name

-GET: /image/:fileName Hace una consulta a la api y retorna los datos de la imagen.

\_Ejemplo de respusta:
{
"error": "",
"body": {
"httpStatusCode": 200,
"requestId": "63K82YVSX42R1SYA",
"extendedRequestId": "WvNX/3WR7NxUZbJtHXjYMFOSr6dvUuLjBESWSsqK9n3oj1pFYFhQcMGmwjkqSHzbn9FDAALVK85eeSBN6j1tDQ==",
"attempts": 1,
"totalRetryDelay": 0
}
}

<a name="/downloadimage/:fileName"></a>

## downloadimage

-GET: /downloadimage/:fileName Hace una consulta a la api por el nombre y descarga la imagen(en este caso en la carpeta images del proyecto).

\_Ejemplo de respusta:

{
"error": "",
"body": {
"message": "Archivo descargado"
}
}

<a name="/imageurl/:fileName"></a>

## imageurl

-GET: /imageurl/:fileName Este último endpoint nos retorna la url de la imagen con un tiempo de expiracion de 600seg.

Posibles Respuestas:

{
"error": "",
"body": {
"url": "https://storageapi1985.s3.us-east-2.amazonaws.com/ellos.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6N5BCE5XKQKEDNET%2F20230509%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230509T212130Z&X-Amz-Expires=60&X-Amz-Signature=0fcd466655e1c2e544d255405f9256caa8998faadaaecc339041769fda7df90a&X-Amz-SignedHeaders=host&x-id=GetObject"
}
}
