const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5002;

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

const SECRET_KEY = '123';

app.post('/api/login', (req, res) => {
  const { mail, pword } = req.body;
  const sql = 'SELECT * FROM signup_data WHERE mail = ?';

  db.query(sql, [mail], async(err, result) => {
    if(err){
      return res.status(500).send('Error querying the database');
    }
    if(result.length === 0){
      return res.status(400).send('User not found');
    }
    const user = result[0];
    const isMatch = await bcrypt.compare(pword, user.pword);
    if(!isMatch){
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({id: user.id, mail: user.mail, name: user.fname, role: user.role}, SECRET_KEY, {expiresIn: '1h'});
    res.status(200).send({token, role: user.role});
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});