const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const exp = require('constants');
const { randomUUID } = require('crypto');
const { json } = require('express');

const app = express();
var PORT = 1188;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req,res) => {res.sendFile(path.join(__dirname, '/db/db.json'))});

app.post('/api/notes', (req,res) => {
    json.parse(fs.readFileSync("./db/db.json").push(req.body))
})

