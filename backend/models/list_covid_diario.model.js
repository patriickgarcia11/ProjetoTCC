const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const listcoviddiarioSchema = new Schema({
    cidade: {type: String, required: true},
    data: { type: String, required: true },
    casos: {type: Number, require: true},
    mortes: {type: Number, require: true}

});

const Lista = mongoose.model("Covid_diarios", listcoviddiarioSchema);

module.exports = Lista;
