
# webpack-vue-sass-bootstrap-boilerplate

It contains the following features:

- Webpack 4 bundling
- Babel ES6 Compiler
- Vuejs
- Sass Compiler
- Bootstrap v4
- jQuery 3.3.1
- Popper.js 
- Webpack Dev Server
- Generates `gzip` of both css and js files  

## Getting Started

### Requirements
* Please make sure you have NodeJS installed, as this contains `npm`, which is necessary
for installing dependencies, starting the appropriate scripts, and building your web project.

### Quick Start
Clone the repo:

    git clone https://github.com/backjeff/webpack-vue-sass-bootstrap-boilerplate.git

Navigate to the project folder:

    cd webpack-vue-sass-bootstrap-boilerplate

Install all packages and dependencies required for this project:

    npm install
    
Start the development environment (then, navigate to http://localhost:8080):

    npm start
 
Then, open a browser and navigate to: http://localhost:8080/ 
    
Building files can be done as follows:

    npm run build

### How To Use
* Add your HTML files by inserting or including them in the `src` directory (By default `index.html` is added to your `src` directory, feel free to edit it and 
experiment with the changes live.)
    
    * Make sure you restart development server after adding new HTML files

* Add images to your `src/assets` folder.
* Add sass (SCSS) files to `src/scss` folder.
  * Make sure you import the scss file in `main.scss` 
    
```sass
    @import "filename";
```

### Nginx config
```
server {
    listen 80;
    server_name server.name;
    charset utf-8;
    root /PATH/TO/APPLICATION;
    index index.html;
    location / {
        root /PATH/TO/APPLICATION;
        try_files $uri /index.html;
    }
}
```

# Licence
Code released under the [MIT License](LICENSE.md).
