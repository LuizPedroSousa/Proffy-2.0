import mongoose from '../../Database/connection';
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
    password: string,
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

    passwordResetToken: {
        type: String,
        select: false,
    },

    passwordResetExpires: {
        type: Date,
        select: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

userSchema.pre<IUser>('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const Users = mongoose.model('Users', userSchema);

export default Users;