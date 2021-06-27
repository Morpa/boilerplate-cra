<h1 align="center">Next Boilerplate</h1>

<p align="center">
  <img alt="Made by" src="https://img.shields.io/badge/made%20by-Morpa%20-%2356BEB8">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/morpa/boilerplate-cra.svg?color=56BEB8">

  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/morpa/boilerplate-cra.svg?color=56BEB8">

  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Morpa/boilerplate-cra?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Morpa/boilerplate-cra?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Morpa/boilerplate-cra?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/Morpa/boilerplate-cra?color=56BEB8">

  <img alt="CI" src="https://github.com/Morpa/boilerplate-cra/workflows/ci/badge.svg?color=56BEB8">
</p>

This is a [Create React App](https://create-react-app.dev/) boilerplate with some configurations from React Avançado Course.

## What is inside?

This project uses lot of stuff as:

- [Create React App - CRA](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Folder Structure

```sh
├── README.md
├── generators # folder to our templates
├── public # folder with our assets
├── src
│   ├── App.tsx # main file to our SPA (We define routes/components here)
│   ├── components
│   │   └──Example
│   │       ├── index.tsx
│   │       ├── stories.tsx
│   │       ├── styles.ts
│   │       └── test.tsx
│   ├── index.tsx # main file to ReactDom.render
│   ├── pages # we separated our pages/views/screens here
│   │   └── About.tsx
│   └── styles # any styles that you want to share inside the app
│       └── global.ts
```

## Getting Started

First you can clone or use this template in your GitHub profile.

```sh
# install the deps
yarn

# run the project
yarn start
```

Other commands like `generating components` and test are listed below:

## Commands

- `start`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `generate <ComponentName>`: generates a new component under `src/components` folder
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Learn More

To learn more about the structure and other commands/modifications, see the [Create React App Documentation](https://create-react-app.dev/).
