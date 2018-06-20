#!/bin/bash

ng build --target=production --environment=prod --output-path cordova/www --base-href . && cd cordova &&  cordova build android && cp /home/rodrigo/Documents/proyectos/ouzom/cadenaoracion/cordova/platforms/android/app/build/outputs/apk/debug/*-debug.apk /home/rodrigo/Dropbox/
