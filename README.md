#TEDx Parque Jipiro

##(WIP) Pucara Theme
Tema desarrollado para [Ghost](https://ghost.org/)

###Que necesitamos:

1. CLONE :ghost:
```bash
  git clone git://github.com/noggalito/TEDxPJ
```
1. Instalar todas las dependencias:
```bash
  npm install
```
1. Instalamos gulp en nivel global para correr el entorno de desarrollo:
```bash
  npm install -g gulp
```
1. Corremos nuestro entorno automatizado mediante [Gulp](http://http://gulpjs.com) (Grunt con Esteroides :) )
  - con esta linea dejaremos corriendo servira para el entorno de desarrollo del frontend, compilación y minificación de sass (**NOTA**: importar parciales extra que creamos en el archivo components.sass)
```bash
  gulp run:environment
```
1. Start Ghost!
  - Local environment: `npm start`
  - On a server: `npm start --production`


#####Herramientas (Opcionales para compilar css):

- [**Codekit**](https://incident57.com/codekit/) : Gran herramienta Frontent compila tiempo real y agrega un livereload(cambios mostrados sin recargar el navegador), creando un sevidor local propio.
- [**Scout**](http://mhs.github.io/scout-app/): Compilador de Sass que trabaja con la libreria externa Compass.

Puedes optar por estas herramientas que cumplen la misma funcion que CodeKit.

- [**Prepos**](https://prepros.io) : Herramienta para compilar varios lenguajes Less, Sass, CoffeScript etc...
- [**Koala**](http://koala-app.com/): Opcional cumple la misma funcion de CodeKit.
