const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sham@ruta2003',
  database: 'patient_tracker'
});

db.connect(err => {
  if(err){
    console.error('Falied to connect to MySQL', err);
  }
  else{
    console.log('Connected to MySQL database');
  }
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/form2', async (req, res) => {
  const { fname, lname, mail, pword, cpword, role } = req.body;
  if(pword !== cpword){
    return res.status(400).send('Password and confirm password do not match');
  }
  try{
    const hashedPassword = await bcrypt.hash(pword, 10);
    const sql = 'INSERT INTO signup_data (fname, lname, mail, pword, role) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [fname, lname, mail, hashedPassword, role], (err, result) => {
        if(err){
            console.error('Error saving form data: ', err);
            return res.status(500).send('Error saving form data');
        }
        else{
            return res.status(200).send('Form data saved to database');
        }
    });
  }
  catch(error) {
    console.error('Error hashing password: ', error);
    res.status(500).send('Error processing request');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});