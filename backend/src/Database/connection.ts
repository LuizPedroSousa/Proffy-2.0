import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/proffy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('conexão com banco de dados realizada com sucesso');
    })
    .catch(err => {
        console.error(`Falha ao conectar-se com banco de dados: ${err}`);
    });

export default mongoose;