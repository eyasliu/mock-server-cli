import "regenerator-runtime/runtime";
import fs from 'fs'
import koa from 'koa'
import logger from 'koa-logger'
import {argv} from 'yargs'

import db from './middleware/db'
import mock from './middleware/mock'
import api from './middleware/api'
import admin from './middleware/admin'
import cors from './middleware/cors'
import server from 'koa-static'
import bodyparser from 'koa-bodyparser'

import path from 'path'
import pkg from './package.json'

let config = {
    "db": argv.db && (argv.db !== true) ? argv.db : "mockdata.json",
    "domain": argv.address && (argv.address !== true) ? argv.address : "localhost",
    "port": argv.port && (argv.port !== true) ? argv.port : 3000,
    ...argv
}
// console.log(config)

const appInfo = {
    version: pkg.version
}

if(config.h || config.help){
    console.log(
`

Usage: mock-server [options] [ --db mockdata | mockdata.json ]

Options:

  -h, --help                     output usage information
  -v, --version                  output the version number
  
  --port [number]                Port to use [3000]
  --db [string]                  use the json database
  --address [domain | ip]        Address to use [localhost]
`)
} else if(config.v || config.version){
    console.log( 'version: ' + appInfo.version)
} else {
    const app = new koa()
    app.use(async (ctx, next) => {
        ctx.appConfig = config;
        await next()
    })
    app.use(logger())
    app.use(server(path.join(__dirname, './client')))
    app.use(bodyparser())
    app.use(cors('http://portal.wps.cn'))
    app.use(db(path.join(process.cwd(), config.db)))
    app.use(admin.routes())
    app.use(admin.allowedMethods())
    app.use(api)
    app.use(mock());

    app.listen(config.port, '0.0.0.0', () => {
    	console.log(`mock server listening http://${config.domain}:${config.port}`)
    })
    
}

