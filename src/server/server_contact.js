const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

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

app.post('/api/form1', (req, res) => {
  const { fname, lname, oname, mail } = req.body;
  const sql = 'INSERT INTO form_data (fname, lname, oname, mail) VALUES (?, ?, ?, ?)';
  db.query(sql, [fname, lname, oname, mail], (err, result) => {
    if(err){
      res.status(500).send('Error saving form data');
    }
    else{
      res.status(200).send('Form data saved to database');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});