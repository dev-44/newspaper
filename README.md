# newspaper

## PASOS PARA LA CONFIGURACIÓN DEL PROYECTO

1. Abra una terminal y ejecute el siguiente comando para clonar el proyecto:

`git clone https://github.com/dev-44/newspaper.git`

2. Ubíquese en la carpeta del proyecto recién creado.

`cd newspaper`

3. Instale las siguientes dependencias en varías líneas o en una sola instrucción.

`npm i axios`

`npm i react-native-dotenv`

`npm i react-navigation @react-navigation/native @react-navigation/stack @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler @react-native-masked-view/masked-view`

`npm i @shopify/flash-list`

## CREACIÓN DE API_KEY

1. Ingrese a  [News Api](https://newsapi.org/) y dele click al botón "GET API KEY"

2. Ingrese los datos solicitados para crearse una cuenta.

3. Localice el campo API_KEY y copie el código proporcionado en el mismo. Ej '1082d3a9a07c3e86aa451dacdc52a9o0'

4. En la carpeta raíz del proyecto cree un archivo llamado .env y copie el siguiente código:

`REACT_APP_API_KEY=[SU API_KEY]`	// Reemplace el valor por su API_KEY

## EJECUCIÓN DEL PROYECTO (Dispositivo físico Android)

1. En su dispositivo móvil habilite la opción Opciones de Desarrollador. Una vez habilitado active la opción Depuración USB. Conecta su dispositivo a su PC de escritorio o notebook a través de un cable USB, a continuación elija la opción de Usar USB para transferir archivos.

2. En su PC de escritorio o notebook abra una terminal ejecute el siguiente comando para verificar si su dispositivo móvil se encuentra conectado:

`adb devices`

1. Si su dispositivo se encuentra conectado ubíquese en la terminal en el directorio del proyecto y ejecute el siguiente comando:

`npx react-native start`

2. En otra terminal ubíquese en el directorio del proyecto y ejecute el siguiente comando:

`npx react-native run-android`

3. Ahora podrá observar el proyecto ejecutarse en el celular. 
