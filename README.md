#TEDx Parque Jipiro
=============

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
  - con esta linea corremos el entorno de desarrollo frontend, para la compilacion y minificación de sass (importar partials extra en components.sass)
```bash
  gulp run:environment
```
1. Start Ghost!
  - Local environment: `npm start`
  - On a server: `npm start --production`


#####Herramientas (Opcionales para compilar css):

- [**Codekit**](https://incident57.com/codekit/) : Lo usamos como compilador de Sass.
- [***Bootstrap*](http://getbootstrap.com/): framework de diseño base.

Puedes optar por estas herramientas que cumplen la misma funcion que CodeKit.

- [**Prepos**](https://incident57.com/codekit/) : Herramienta para compilar varios lenguajes.
- [**Koala**](http://koala-app.com/): Opcional cumple la misma funcion de CodeKit.
