//config.js
var convict = require('convict'),
    check = require('validator').check;

var conf = convict({
	env: {
		doc: 'The Server Environment',
		format: ['development','production'],
		default: 'production',
		env: 'NODE_ENV'
	},
	db: {
		protocol: {
			doc: 'DB Connection Protocol',
			default: 'mongodb'
		},
		host: {
			doc: 'DB Host IP Address',
			default: '127.0.0.1'
		},
		port: {
			doc: 'DB Port',
			default: '27017'
		},
		user: {
			doc: 'DB User',
			default: ''	
		},
		password: {
			doc: 'DB Password',
			default: ''
		},
		database: {
			doc: 'DB database',
			default: 'hacktrixDb'
		}
	}
});

var env = conf.get('env');
var envConfigFile = './config/' + env + '.json';

try {
	var files = [ envConfigFile];

	conf.loadFile(files);
}
catch(e) {
	console.error('Could not load configuration: %s', e);
}

conf.validate();

module.exports = conf;