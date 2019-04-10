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
	host: 'ec2-54-195-252-243.eu-west-1.compute.amazonaws.com',
	port: 5432,
	username: 'cttnxpzgrvhhlo',
	password: '40e5ad7464fdd7d3b7e399159b0d40134c4c87854e33a4ac9a4e28376059df6c',
	database: 'd8i3neipdlbp2s',
	entities: [
		path.resolve(__dirname, './models/*.ts'),
	],
	extra: {
		ssl: true,
	},
	synchronize: true,
}).then(startExpress);
