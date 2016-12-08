import webpack from 'webpack'
import path from 'path'
import fs from 'fs'

const isServer = process.env.APP_ENV === 'server'

const nodeModules = {};
if(isServer){
	fs.readdirSync('node_modules')
	  .filter(x => ['.bin'].indexOf(x) === -1)
	  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)
}

const config = {
	entry: {
		[isServer ? 'server' : 'index']: isServer ? './index.js' : "./client/src/index.js"
	},
	target: isServer ? 'node' : 'web',
	output: {
		path: path.join(__dirname, isServer ? './' : './client/dest'),
		filename: '[name].js'
	},
	externals: nodeModules,
	module: {
		loaders: [
			{
		        test: /\.js$/,
		        loader: 'babel'
		    }, {
		        test: /\.json$/,
		        loader: 'json'
		    }, {
		        test: /\.css$/,
		        loader: 'style!css'
		    }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
	        'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
	    })
	]
}
if(process.env.NODE_ENV === 'production'){
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }))
}
if(isServer){
	config.node = {
		__filename: false,
		__dirname: false,
		process: false
	}
	config.plugins.push(function(){
    	setTimeout(() => {
			this.plugin('done', () => {
				// fs.appendFileSync(config.output.path + '/server.js', '#!/usr/bin/env node', 'utf8')
    			const outputServer = fs.readFileSync(config.output.path + '/server.js')
    			fs.writeFileSync(config.output.path + '/server.js', '#!/usr/bin/env node\n' + outputServer.toString())
    			
    		})
    	})
    })
}
export default config