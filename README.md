# Evelyn

Landing page template for Vue.js.

* [Project setup](#project-setup)
* [Deploy with Netlify](#deploy-with-netlify)
* [Deploy with Heroku](#deploy-with-heroku)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy with Netlify
To deploy with Netlify you just need to create a repository and copy the whole content of the `Vue`folder. Then, create a new site from Git in Netlify to deploy the app. We have included a `netlify.toml` file to allow you deploying without configuring anything.

## Deploy with Heroku
In order to deploy with Heroku, we have added a `server.js` file in the root and a `start` script in the `package.json` file to be run once Vue.js installs dependencies (express is required as a dependency in the `package.json` file).