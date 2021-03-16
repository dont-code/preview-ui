![image](https://dont-code.net/assets/logo-shadow-squared.png)
## What is it for ? 

This application allows you to see in realtime the effect of the changes you are doing with the dont-code editor.
It is part of the [dont-code](https://dont-code.net) no-code / low-code platform enabling you to quickly produce your very own application. 

## What is it ?
It's an Angular application that listens to changes sent by the editor application and updates or pushes changes to plugins
![Screenshot](https://dont-code.net/assets/Previewer%20Edit%20Task.png)

## How is it working ?

## How to build it ?
This project is a standard Angular - npm project, so the usual commands apply:

1. Installing
  `npm install`

2. Running

  `npm run nx serve preview-ui --configuration=online --hmr`

and point your browser to https://localhost:4201

3. Running unit tests

  `npm run nx test preview-ui`

4. Running Cypress End to end tests

   `npm run nx e2e preview-ui-e2e`

## Thank you

This project was generated using [Nx](https://nx.dev), visit the [Nx Documentation](https://nx.dev/angular) to learn more.
