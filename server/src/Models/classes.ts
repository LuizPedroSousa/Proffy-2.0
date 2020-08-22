import mongoose from '../Database/connection';

const classSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
        maxlength: 20,
    },
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    avatar: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Classes = mongoose.model('Classes', classSchema);

export default Classes;