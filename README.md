# currency-calculator-react

## Description

This is a simple react currency calculator with interactions (one can select currency values from the list of options in the From component or can just click the proper table-data field of the Table component and the actual state of the choices is marked with changed background color of active fields). Additionally one must input the amount of money he wants to check. The calculator has two buttons: a calculation button to calculate the results based on delivered data from the Form and a reset button to reset the application. The calculator was created with the create-react-app package (refactored from the currency calculator repository made in Vanilla js). The converter is fetching the data from public API just after DOM is installed and fills the table with actual rates from European Central Bank and shows the valid date. At the time of loading the data, and in case of failure the user is informed about the actual state with a friendly message.

https://gp231982.github.io/Currency-calculator-react/

## Demo

https://github.com/gp231982/Currency-calculator-react/assets/68773588/96559c08-2038-42fd-8878-86e146879a6d

## Technologies and conventions

- HTML
- CSS
  - Flexbox Layout
  - Transitions and Transforms
- JavaScript and asynchronous functions
- React and JSX syntax
- styled-components
- embedded (useState, useRef, useEffect) and custom react hooks
- passing props down to the children
- creating interactions between state variables
- ES6+ features:
  - let and const keywords
  - Arrow Functions
  - Template Literals
- BEM and Immutability convention

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
