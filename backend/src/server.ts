import express from 'express';
import Router from './routers';
import body from 'body-parser';
//Configs
const app = express();
app.use(express.json());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(Router);

const port = 3535;
app.listen(port, () => {
    console.log(`Servidor online em: http://localhost:${port}`);
});