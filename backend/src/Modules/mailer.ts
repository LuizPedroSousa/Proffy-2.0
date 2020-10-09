import { config } from './../Configs/transport';
import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

const transport = nodemailer.createTransport(config);

transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/Resources/mail/'),
    },
    viewPath: path.resolve('./src/Resources/mail/'),
    extName: '.html',
}));

export default transport;