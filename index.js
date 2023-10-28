
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;

app.use(bodyParser.json()); // Parse JSON data in requests

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






//import 'dotenv/config';
//var os=require('os');
// const mysql = require('mysql');
//var databaseOptions=require('/database.env');
const connection=mysql.createConnection({
    host:"sql.freedb.tech",
    port:"3306",
    database:"freedb_secret",
    user:"freedb_shruti",
    password:"Sep$vqT7y5zGqqC"
});

connection.connect((err) =>{
    if(err) throw err;
    console.log('pta ni');
});

console.log("yipeee")

//  app.post('/test',(req,res)=>{
//     const data = req.body;
//     console.log(data)
// })
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // In a real application, you would validate the username and password here
    // For simplicity, we'll just check if they exist
    console.log('Connected to MySQL as id ' + connection.threadId);

    const providedUsername = username; // Replace with the user-provided username
    const providedPassword = password; // Replace with the user-provided password
  
    const sql = `
      SELECT * 
      FROM secrets 
      WHERE email = ? AND enrollment_no = ?;
    `;
  
    connection.query(sql, [providedUsername, providedPassword], (err, rows) => {
      if (err) {
        console.error('Error querying the database: ' + err.stack);
        return;
      }
      console.log(rows)
      if (rows.length === 1) {
        // Authentication successful
        console.log('User authenticated:', rows[0]);
        // res.sendDate('i')
        res.send("success")
      } else {
        // Authentication failed
        console.log('Authentication failed');
      }
  
    //   connection.end((err) => {
    //     if (err) {
    //       console.error('Error closing the connection: ' + err.stack);
    //       return;
    //     }
  
    //     console.log('Connection closed.');
    //   });
    });
  });
    // if (providedUsername && providedPassword) {
    //   // Authentication successful

    //   res.json({ message: 'Login successful' });
    // } else {
    //   // Authentication failed
    //   res.status(401).json({ message: 'Authentication failed' });
    // }
  
  

//var email=document.getElementById("email");
//var password=document.getElementById("password")

//connection.query("select * from  usercredentials where "{


//});


