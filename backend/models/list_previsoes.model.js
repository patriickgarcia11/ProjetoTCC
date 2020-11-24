const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const listcovidprevisoesSchema = new Schema({
    cidade: {type: String, required: true},
    data: { type: String, required: true },
    casos: {type: Number, require: true},
    mortes: {type: Number, require: true}

});

const Previsoes = mongoose.model("covid_previsoes", listcovidprevisoesSchema);

module.exports = Previsoes;