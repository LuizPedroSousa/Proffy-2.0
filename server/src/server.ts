import express from 'express';
import body from 'body-parser';
import router from './routers';
import cors from 'cors'
const app = express();
//Configs
    app.use(express.json());
    app.use(body.json());
    app.use(body.urlencoded({extended: false}))
    app.use(cors());
    app.use(router);


app.listen(4004, () => {
    console.log(`Servidor Online na porta: http://localhost:4004`);
});