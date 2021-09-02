const mongoose = require("mongoose")
const { schedulingPolicy } = require("cluster")
const { truncate } = require("fs")
const Schema = mongoose.Schema

const Categoria = new Schema({
    nome: {
        type: String,
        required: true
    },
    slug: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now() 
    }
})

mongoose.model("categorias", Categoria)