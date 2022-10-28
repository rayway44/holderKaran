
const express = require('express')
const cors = require('cors')
// get the client
const mysql = require('mysql2');

const app = express()
app.use(cors())

const port = 4000

// create the connection to database
// const db = mysql.createConnection({
//     host: 'sg1-ts6.a2hosting.com',
//     user: 'missio20_team6',
//     password: "e9k)apUqCxdt",
//     database: ''
// });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Strathmore2544",
    database: ''
});

db.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log('connected successfully. . . ')
    }
})

// This gives us one result
// SELECT * FROM missio20_team6.student WHERE student_id = 4;

// Gives all students
// SELECT * FROM missio20_team6.student;

app.get('/', function (req, res) {
  res.send('Hello LEISA')
  console.log('hitting here for console')
})

app.post('/login/:user/:password',(req,res) => {

    let user = req.params.user;
    let password = req.params.password;
    // res.send(`hitting here`)

    console.log(`username: ${user}`)
    console.log(`password: ${password}`)

    // password: 'ray'
    // username: 'karan'

    let query = `SELECT * FROM karan.login WHERE username = '${user}' AND password = '${password}';`
    // let query = `SELECT * FROM karan.login`

    db.query(query, (err,result)=> {
        res.send(result)
        console.log(result)
    })

})

app.get('/student/:chicken', function (req, res) {

    let id = req.params.chicken

    // let query = `SELECT * FROM missio20_team6.student WHERE student_id = ${id}`

    // db.query(query, (err,result)=> {
    //     res.send(result)
    //     console.log(result)
    // })
    
})



// =============================== SERVER
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})