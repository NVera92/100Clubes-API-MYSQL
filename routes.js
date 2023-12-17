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
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM club WHERE idClub ='+req.query.id,(err,row)=>{
        
            if(err) return res.send(err)
            res.json(row)
        })
    })
})


routes.get('/nombre',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM club WHERE nombre LIKE '%"+req.query.nombre+"%'",(err,row)=>{
            if(err) return res.send(err)
            res.json(row)
        })
    })
})

routes.get('/barrio',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('CALL obtenerClubesBarrio(?)',req.query.barrio,(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.get('/actividades',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('CALL obtenerClubesActividades(?)',req.query.actividades,(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


routes.get('/activo',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM club WHERE activo = 1',(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.get('/inactivo',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM club WHERE activo = 0',(err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
module.exports = routes