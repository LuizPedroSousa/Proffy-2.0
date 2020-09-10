import Mail from 'nodemailer/lib/mailer';
declare module 'nodemailer-express-handlebars'{
    export interface Options extends Mail.Options{
        template: string;
    }
};