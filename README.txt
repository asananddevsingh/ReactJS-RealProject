Steps to configure webpack:

1: Open command prompt at the project location.
2: execute "npm init".
3: After execution of init, it will as to check the details like project name, location etc. where it will download the node_modules.
4: edit the downloaded "package.json" file to download the additional dependencies. 

eg, {
  "name": "react-for-everyone",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies":{
  	"babel-core": "^6.7.*",
  	"babel-loader": "^6.2.*",
    "babel-preset-es2015": "^6.6.*",
    "babel-preset-react": "^6.5.*",
  	"webpack": "^1.12.*",
  	"webpack-dev-server": "^1.14.*"
  },
  "dependencies":{
  	"react":"^15.0.0",
    "react-dom":"^15.0.0"
  }
}

5: Now at cmd window, execute the command "npm install". It will install the dependencies.
6: Add new file name as "webpack.config.js" with below code (you configure it as per your project structure):
module.exports = {
	entry: './src/App.js',
	output:{
		path: __dirname, 
		filename: 'app.js'
	},
	module:{
		loaders:[{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};

7: To start the webpack dev server, Go to the project location, open the commad prompt, then execute "node_modules\.bin\webpack-dev-server". It will start the dev server at your local machine.
8: To check the server is running or note, just hit the url "localhost:8080" at the browser. Note port may vary as per your port number setting.
9: That's it, Enjoy working with ReachJS.