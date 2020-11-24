const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Conectado com sucesso!!!");
})

const feedbackRouter = require('./routes/feedback');
const listdiarioRouter = require('./routes/list_covid_diario');
const previsoescovidRouter = require('./routes/list.previsoes');
const historicoRouter = require('./routes/list_historico');




app.use('/feedback', feedbackRouter);
app.use('/lista_diaria', listdiarioRouter);
app.use('/previsoes_covid', previsoescovidRouter);
app.use('/list_historico', historicoRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});






