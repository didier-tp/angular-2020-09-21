REM ng serve --proxy-config proxy.conf.json
REM si angular.json comporte (près de la ligne 73) l'option
REM  "proxyConfig": "proxy.conf.json" , ex:
REM "serve": {
REM          "builder": "@angular-devkit/build-angular:dev-server",
REM          "options": {
REM            "browserTarget": "my-app:build",
REM            "proxyConfig": "proxy.conf.json"
REM          },
REM on peut alors lancer ng serve sans préciser l'option à chaque fois
ng serve