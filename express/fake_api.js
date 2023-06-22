module.exports = require('./lib/express');

const express = require('express')
const app = express()
const port = 3000

function insert(key, val){
    return `Key: ${key}, Val: ${val}`
}

function getEntry(key){
    return `Val is val1`;
}

function exist(key){
    return true
}

function deleteEntry(key){
    return true
}

function updateEntry(key, val){
    return `Update succesfull: Key: ${key}, Val: ${val}`
}



app.get('/', (req, res) => {
    res.send('Starting Page')
  })

app.post('/insert/:key/:val', (req, res) => {
    res.send(insert(req.params.key, req.params.val));
    return insert(req.params.key, req.params.val)
})

app.get('/insert/:key/:val', (req, res) => {
    res.send(insert(req.params.key, req.params.val));
    return insert(req.params.key, req.params.val)
})

app.get('/getEntry/:key', (req, res) => {
    res.send(getEntry(req.params.key))
    return getEntry(req.params.key)
})

app.get('/exist/:key', (req, res) => {
    res.send(exist(req.params.key))
})

app.delete('/deleteEntry/:key', (req, res) => {
    res.send(deleteEntry(req.params.key))
    return deleteEntry(req.params.key)
})

app.put('/updateEntry/:key/:val', (req, res) => {
    res.send(updateEntry(req.params.key, req.params.val))
    return updateEntry(req.params.key, req.params.val)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })