const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const listhistoricoSchema = new Schema({
    cidade: {type: String, required: true},
    data: { type: String, required: true },
    casos: {type: Number, require: true},
    mortes: {type: Number, require: true}

});

const Historico = mongoose.model("covid_historicos", listhistoricoSchema);

module.exports = Historico;
