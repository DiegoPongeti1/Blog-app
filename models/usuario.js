const { truncate } = require('fs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// apenas um teste 
// mais um teste 
const Usuario = new Schema( {
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eAdmin: {
        type: Number,
        default: 0
    },
    senha: {
        type: String,
        required: true
    }
})

mongoose.model("usuarios", Usuario)