// routes/student.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Get student details by ID
router.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new student
router.post('/students', async (req, res) => {
    const { registrationNumber, name, age, email, department } = req.body;

    if (!registrationNumber || !name) {
        return res.status(400).json({ message: 'Registration number and name are required' });
    }

    const student = new Student({
        registrationNumber,
        name,
        age,
        email,
        department,
    });

    try {
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
