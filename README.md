# React/Redux Webpage
An updated personal webpage using React 16, Redux 5, and Webpack 3.

## Run the Webpack Dev Server

For development, run this lightweight dev server on http://localhost:8080.  Implements hot loading to automatically refresh parts of the page that have changed.

```
    1.  To start the dev server:
            $  npm run serve

    2.  Open a new browser window:
            http://localhost:8080

```

## Webpack Build

Add a node script in package.json to run the locally-installed version of webpack:
```` javascript 
    $  npm run build
````

---


_December 9, 2017_
---
I tried to update an existing repository, but so many dependencies were outdated that I thought a blank canvas would provide a fresh start.

Goals:
-  Update my webpage
-  Add a cog animation
-  Deploy to AWS S3

Basic Webpage Setup:
1. Copy index.html template
2. Copy index.js React/Redux template
3. Update package.json with core dependencies
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
6. Render my updated homepage

## Webpack Loaders
Loaders pre-process files before placing them into the bundle.js file

## Babel Modules
1.  babel-loader => teaches babel how to work with webpack
2.  babel-core => knows how to take in code, parse it, and generate files
3.  babel-preset-env => ruleset (dozens of individual rules) for telling babel exactly what pieces of ES15/16/17 syntax to look for, and how to turn it into ES5 code.  Ex) turns arrow functions into regular functions; turns let into var.

### publicPath
To allow on-demand loading of webpages, it is important to specify the public URL of the output directory when referenced in a browser.  

Simple Rule: the URL of the output.path from the view of the HTML page.

The value of this property is prefixed to every URL created by the runtime or loaders.  Because of this, the value usually ends with a '/'.  

If this property is not specified correctly, the browser won't load any changes.

```` javascript
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build/',
        filename: 'bundle.js'
    },
````

### Banner Build ###
Wednesday, July 11, 2018

After adding a Redux store and working out some connection kinks, I got the basic BannerContainer working.  The React component structure is shown below:

````
    BannerContainer
        |
        |__ Menu
        |   |__ GearSmall
        |   |__ Label
        |
        |__ Canvas
            |__ CanvasContent
````

__Questions__
1.  Why are fat arrow functions not working in Menu.js?  Why do I have to bind the _this_ context in the constructor function?

```
    Answer:  
    Arrow functions located inside a class are not included in the ES2015/2016 webpack configuration.  
    An additional npm package must be installed and added to the webpack configuration.

    1.  Installed the following package:

        $  npm install --save-dev babel-plugin-transform-class-properties

    2.  Added the package as a babel plugin in the .babelrc file:

        {
            "presets": ["babel-preset-env", "react"],
            "plugins": ["transform-class-properties"]
        }
```

Reference:  
https://medium.com/@machnicki/handle-events-in-react-with-arrow-functions-ede88184bbb

https://stackoverflow.com/questions/42063854/arrow-function-syntax-not-working-with-webpack

2.  The class '.container' is linked to bootstrap.


### Three Fundamental Pillars of Writing Good HTML & CSS
Sec. 3, Lec. 12

1.  Responsive Design
2.  Writing maintainable and scalable code
3.  Web performance

_Responsive Design_
- Build one website that works beautifully on all screen sizes and across all devices
- Ex) fluid layouts & media queries
- Responsive images - correct units for font size and dimensions
- Desktop or mobile first strategy

_Maintainable and Scalable Code_
- Clean, easy to understand code
- Reusable
- Supports future growth
- Care about CSS architecture, organize files, names classes, and structure markup in HTML

_Web Performance_
- Make a website faster and smaller in size
- Reduce number of files in HTML doc
- Decrease number of HTTP requests and user downloads
- Fewer files in HTML docs
- Write as little code; compress code, use pre-processor
- Reduce images to the essential ones; also compress images








