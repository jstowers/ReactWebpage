# ReactWebpage
An updated webpage using React 16 and Webpack 3

### December 9, 2017
I tried to update an existing repository, but so many dependencies were outdated that I thought a blank canvas would provide a fresh start.

Goals:
-  Update my webpage
-  Add a cog animation
-  Deploy to AWS

Basic Webpage Setup:
1. Copy index.html template
2. Copy index.js React/Redux template
3. Update package.json with dependencies
    npm install
    - react (16.2.0)
    - react-dom (16.2.0)
    - react-redux (5.0.6)
    - redux (3.7.2)
4. Update package.json with devDependencies 
    npm install --save-dev 
    - babel-core (6.26.0)
    - babel-loader (7.1.2)
    - babel-preset-env (1.6.1)
    - redux-devtools (3.4.1)
    - webpack (3.10.0)
    - webpack-dev-server (2.9.7)
4. Install dependencies using npm install
5. Build webpack bundle
6. Render "Hello, World"


Webpack Build

- Add an npm script in package.json to run the locally-installed version of webpack:
        npm run build

Babel Modules
1.  babel-loader => teaches babel how to work with webpack
2.  babel-core => knows how to take in code, parse it, and generate files
3.  babel-preset-env => ruleset (dozens of individual rules) for telling babel exactly what pieces of ES15/16/17 syntax to look for, and how to turn it into ES5 code.  Turns arrow functions into regular functions.  Turns let into var.

Add Babel to Webpack Loaders


## Webpack Dev Server

### publicPath

To allow on-demand-loading of webpages, it is important to specify the public URL of the output directory when referenced in a browser.  If this property is not specified correctly, the browser won't load any changes.

The value of this property is prefixed to every URL created by the runtime or loaders.  Because of this, the value usually ends with a '/'

Simple Rule: the URL of the output.path from the view of the HTML page.

````    output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: 'build/',
            filename: 'bundle.js'
        },
````
