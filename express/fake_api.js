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

function addDelegate(UDID) {
    const success = "Successfully proposed"
    const DNE = `Delegate with UDUD: ${UDID} do not exist`
    const alreadyExist = `Delegate with UDUD: ${UDID} already added`

    return success
}

function findLostAccount(UDID) {
    return "Sucessfully propsoed the lost account process"
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

app.put('/addDelegate/:key', (req, res) => {
    res.send(addDelegate(req.params.key));
})

app.get('/getEntry/:key', (req, res) => {
    const test_dele_not_null = {
        name : "Bill",
        birthyear: 2002,
        birthmonth: 10,
        birthday: 22,
        delegates: ["Samuel", "Hill", "Jack", "Linda", "Adele"],
        identity: false,
        description : "Health-care provider at Vanderbilt University ",
        isNameSetPublic: true,
        isBirthInfoSetPublic: true ,
        isDescriptionSetPublic: true
    }

    const test_info_null = {
        name : "David Paxton",
        birthyear: 2001,
        birthmonth: 7,
        birthday: 2,
        delegates: [],
        identity: false,
        description: "Expert in Albinism. Got my PHD at Vanderbilt University",
        isNameSetPublic: true,
        isBirthInfoSetPublic: false,
        isDescriptionSetPublic: false
    }

    const test_info = {
        name : "Samuel",
        birthyear: 2002,
        birthmonth: 2,
        birthday: 12,
        delegates:[["Dr. Zhang", true], ["Dr. Lee", true], ["Dr. Chen", true], ["Bill", false]],
        identity: true,
        description: "This patient have bad smell" ,
        isNameSetPublic: true,
        isBirthInfoSetPublic: false,
        isDescriptionSetPublic: true
    }


    console.log(patient_schema.validate(test_info))
    if (patient_schema.validate(test_info).error == null){
        if(req.params.key == "Nullarr"){
            res.json(test_info_null)
        } else if (req.params.key == "Dele"){
            res.json(test_dele_not_null)
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

app.post('/addDelegate/:UDID', (req, res) => {
    res.json(addDelegate(req.params.UDID))
    return addDelegate(req.params.UDID)
})

app.post('/findLostAccount/:UDID', (req, res) => {
    res.json(findLostAccount(UDID))
})

// app.get('/addDelegate/:UDID', (req, res) => {
//     res.json(addDelegate(req.params.UDID))
//     return addDelegate(req.params.UDID)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })