import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/classes',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com banco de dados realizada com sucesso');
    })
    .catch(err => {
        console.error(err);
    });

mongoose.Promise = global.Promise;

export default mongoose;