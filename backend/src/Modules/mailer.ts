import path from 'path';
import nodemailer from 'nodemailer';
import mailer from '../Configs/mailer.json';
import handle from 'nodemailer-express-handlebars';
const transport = nodemailer.createTransport({
  host: mailer.host,
  port: mailer.port,
  auth: {
    user: mailer.user,
    pass: mailer.pass,
  }
});

transport.use('compile', handle({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/resources/mail/')
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}));

export default transport;