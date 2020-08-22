import mongoose from '../Database/connection';

const classScheduleSchema = new mongoose.Schema({
    week_day: {
        type: Number,
        required: true,
    },
    from: {
        type: Number,
        required: true,
    },
    to: {
        type: Number,
        required: true,
    }
});

const classSchedules = mongoose.model('classSchedules', classScheduleSchema);


export default classSchedules;