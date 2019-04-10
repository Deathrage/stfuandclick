import 'reflect-metadata';
import * as express from 'express';
import * as path from 'path';
import * as session from 'express-session';
import router from './router/router';
import { createConnection } from 'typeorm';
import bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const startExpress = () => {
	const app = express();
	app.set('view engine', 'ejs');
	app.set('views', './views');
	app.use(bodyParser.json());
	// Redux will retrieve session id from here
	app.use(session({
		name: 'clickerId',
		secret: '343ji43j4n3jn4jk3n',
		cookie: {
			httpOnly: false,
		},
	}));
	app.use(router);
	app.listen(port, () => console.log(`Listening at port ${port}`));
};

// I decided to use Postgres as it allows to maintain data while switching on/off
createConnection({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	entities: [
		path.resolve(__dirname, './models/*.ts'),
	],
	extra: {
		ssl: true,
	},
	synchronize: true,
}).then(startExpress);
