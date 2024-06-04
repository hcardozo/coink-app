# Coink

Aplicacion de registro para validar conocimientos tecnicos en ionic/angular

## Descripción del Proyecto

En este proyecto se trabajo la prueba técnica para COINK en la cual se realizaron los siguientes puntos:

- Generacion de proyecto
- Configuracion de proyecto
- Instalacion de dependencias necesarias
- Organizacion de carpetas
- Enrutado de modulo de registro
- Creacion de componente general landing para realizar la gestion de todos los datos y el manejo del stepper
- Creacion de componentes individuales para el registro

PENDIENTES:
Por cuestiones personales y de tiempo quedaron pendientes los siguientes puntos:
- Completar pantalla de formulario y consumo de servicio (este se tenia planeado realizar con HttpClient desde un servicio custom y enviar el objeto de datos a cada uno de los input de lista)

- Realizar pantalla de tratamiento de datos (Para esta pantalla se realizaria de igual manera como la pantalla de numero de telefono, respetando los diseños y la configuracion del stepper)

- Configuracion de splashscreen e iconografia (Se intento realizar la configuracion de ambas cosas con capacitor pero por cuestiones de tiempo no se lograron corregir los errores por lo que no se logro prsentar el spash y la configuracion de los iconos)


## Requisitos Previos

Para la compilacion y generacion de la apk es necesario ejecutar los siguientes comandos bash:

```bash
ionic capacitor build android
```

Despues de realizar el empaquetado se abrira ANDROID STUDIO y podremos generar la apk:

1. Seleccionar la aplicacion

2. Dar en la opcion Build

3. Dar en la opcion Build Bundle(s)/APK...

4. Despues de esto podremos encontrar nuesta APK en la ruta del proyecto: 

> coink-app\android\app\build\outputs\apk


Pido disculpas por no terminar completamente el desarrollo pero espero que con lo que se evidencio en el codigo se pueda dar una idea de mis conocimientos y la manera en que trabajo, tanto desde organizacion hasta logica y pulcritud de las pantallas, gracias.