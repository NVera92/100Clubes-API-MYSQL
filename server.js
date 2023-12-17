const express = require('express')
const mySql = require('mysql')
const myConn = require('express-myconnection')
const routes = require('./routes')

const app = express()
app.set('port',process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: '100clubes'
}


// middlewares ------------------------
app.use(myConn(mySql,dbOptions,'single'))

// routes -----------------------------
app.get('/',(req,res) =>{
    res.send('Welcome to my API');
})

app.use('/api',routes)


// server running ---------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})