const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5003;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sham@ruta2003',
    database: 'patient_tracker'
});

db.connect(err => {
    if(err){
        console.error('Failed to connect to MySQL', err);
    }
    else{
        console.log('Connected to MySQL database');
    }
});

app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = '123';
const EMAIL_SECRET = '123';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smchincholkar2003@gmail.com',
        pass: 'sham@ruta'
    }
});

app.post('/api/forgotpassword', (req, res) => {
    const {email} = req.body;
    const sql = 'SELECT * FROM login_data WHERE mail = ?';

    db.query(sql, [email], (err, result) => {
        if(err){
            return res.status(500).send('Error querying the database');
        }
        if(result.length === 0){
            return res.status(400).send('User not found');
        }
        const token = jwt.sign({email}, EMAIL_SECRET, {expiresIn: '1h'});
        const resetLink = `http://localhost:3000/reset-password/${token}`;

        const mailOptions = {
            from: 'smchincholkar2003@gmail.com',
            to: email,
            subject: 'Password Reset', 
            text: `Click on the following link to change your password: ${resetLink}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return res.status(500).send('Error sending email');
            }
            res.status(200).send({message: 'Password reset link send to your email'});
        });
    });
});