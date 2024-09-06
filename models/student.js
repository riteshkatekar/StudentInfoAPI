const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    department: String,
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;