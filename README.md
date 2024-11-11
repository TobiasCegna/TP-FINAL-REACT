# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Dependencias
@testing-library/jest-dom (^5.17.0): Proporciona extensiones de Jest para facilitar las pruebas de DOM en React.
@testing-library/react (^13.4.0): Biblioteca de pruebas para componentes de React.
@testing-library/user-event (^13.5.0): Facilita la simulación de eventos de usuario en pruebas.
react (^18.3.1): Biblioteca principal de React.
react-dom (^18.3.1): Permite a React interactuar con el DOM.
react-router-dom (^6.27.0): Proporciona enrutamiento para aplicaciones de React.
react-scripts (5.0.1): Scripts de configuración y comandos para aplicaciones creadas con Create React App.
web-vitals (^2.1.4): Ayuda a medir el rendimiento web en términos de métricas esenciales.
Scripts
Los siguientes scripts están disponibles para el desarrollo y el despliegue de la aplicación:

start: Ejecuta la aplicación en modo de desarrollo (react-scripts start).
build: Construye la aplicación para producción (react-scripts build).
test: Ejecuta las pruebas de la aplicación (react-scripts test).
eject: Expone la configuración de Create React App para personalización avanzada (react-scripts eject).
Nota: eject es una operación irreversible que permite personalizar el proyecto más allá de la configuración predeterminada.

Configuración de ESLint
Se utiliza ESLint para mantener la calidad del código, con las siguientes configuraciones predeterminadas:

react-app: Reglas básicas para aplicaciones de React.
react-app/jest: Configuraciones de prueba para Jest.
Configuración de compatibilidad con navegadores (browserslist)
Para asegurarse de que la aplicación funcione en una variedad de navegadores, se configura la compatibilidad de la siguiente manera:

Producción:

Navegadores que abarcan más del 0.2% del uso global.
Excluye navegadores que han quedado obsoletos ("dead").
Excluye todas las versiones de Opera Mini.
Desarrollo:

Última versión de Chrome, Firefox y Safari para facilitar la depuración en desarrollo.
Instrucciones para ejecutar el proyecto
Clona el repositorio.
Ejecuta npm install para instalar las dependencias.
Ejecuta npm start para iniciar la aplicación en el modo de desarrollo.