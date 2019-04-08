import * as express from 'express';
import router from './router/router';

const port = 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(router);

app.listen(port, () => console.log(`Listening at port ${port}`));
