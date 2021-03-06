#TEDx Parque Jipiro

## Pucara Theme
Tema desarrollado para [Ghost](https://ghost.org/)

### Que necesitamos:
  * Postgresql
  * NodeJs
  * Ghost
  * pm2 (deploy y control de app)

### Pasos instalacion

0. CLONE :ghost:
  ```bash
    git clone git://github.com/noggalito/TEDxPJ
  ```
0. Instalar todas las dependencias:
  ```bash
    npm install
  ```
0. Instalamos gulp en nivel global para correr el entorno de desarrollo:
  ```bash
    npm install -g gulp
  ```
0. Corremos nuestro entorno automatizado mediante [Gulp](http://http://gulpjs.com) (Grunt con Esteroides :) )
  - esta linea la dejaremos corriendo y servira para el entorno de desarrollo del frontend, compilación y minificación de sass tanto como javascript (**NOTA**: importar parciales extra que creamos en el archivo components.sass y colocar los archivos js en la carpeta lib/js )
  ```bash
    gulp run:developing
  ```
0. Start Ghost!
  - Local environment: `npm start`
  - On a server: `npm start --production`


#####Herramientas (Opcionales para compilar css):

- [**Codekit**](https://incident57.com/codekit/) : Gran herramienta Frontent compila tiempo real y agrega un livereload(cambios mostrados sin recargar el navegador), creando un sevidor local propio.
- [**Scout**](http://mhs.github.io/scout-app/): Compilador de Sass que trabaja con la libreria externa Compass.

Puedes optar por estas herramientas que cumplen la misma funcion que CodeKit.

- [**Prepos**](https://prepros.io) : Herramienta para compilar varios lenguajes Less, Sass, CoffeScript etc...
- [**Koala**](http://koala-app.com/): Opcional cumple la misma funcion de CodeKit.

## Deployment

### How to deploy
after setting up `pm2`, it will look for environment variables / configs inside

`~/pucara/shared/ecosystem.json`

You can find an example on `production.ecosystem.json.example`

### PM2

##### Quick Start:

Instalamos PM2:
* `npm install -g pm2`

Nos aseguramos que el servidor tenga nuestra llave publica

  ```bash
  ssh-keygen -t rsa
  ssh-copy-id -i <nombrekey.pub> user@domain.com
  ```

#### deploying production
* `./deploy.bash production`
