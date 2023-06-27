module.exports = require('./lib/express');

patient_schema = require('./Patient_info.js')

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

    const test_info_null = {
        name : "Bruce",
        birthyear: 2001,
        birthmonth: 7,
        birthday: 2,
        delegates: [],
        identity: false
    }

    const test_info = {
        name : "Yiwei",
        birthyear: 2002,
        birthmonth: 2,
        birthday: 12,
        delegates:["abcd", "efgh", "asfs"],
        identity: true
    }


    console.log(patient_schema.validate(test_info))
    if (patient_schema.validate(test_info).error == null){
        if(req.params.key == "Nullarr"){
            res.json(test_info_null)
        } else {
            res.json(test_info)
        }
    } else {
        res.json("error")
    }  
    // return getEntry(req.params.key)
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