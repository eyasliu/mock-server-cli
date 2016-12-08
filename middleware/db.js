import low from 'lowdb'
import storage from 'lowdb/lib/file-async'
import path from 'path'
import _ from 'lodash'

const defaults = {
	apis: {
		'/example': {
			example: "@name"
		}
	},
	description: {}
}

export class DB {
	constructor(dbName){
		this.dbPath = path.join(~dbName.indexOf('json') ? dbName : dbName + '.json');
		this.db = low(this.dbPath, {storage})
		this.db.defaults(defaults).value()
		this.apis = this.db.get('apis')
	}
}

export default dbName => async (context, next) => {
	const {host, appConfig} = context;
	context.db = new DB(dbName)
	await next()
}