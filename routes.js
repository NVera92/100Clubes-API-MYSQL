const express = require('express')
const routes = express.Router()


routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('CALL obtenerClubes()',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/id',(req,res)=>{
    console.log(req.query.id)
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM club WHERE idClub ='+req.query.id,(err,row)=>{
        
            if(err) return res.send(err)
            res.json(row)
        })
    })
})

module.exports = routes