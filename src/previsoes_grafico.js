import React, {useState, useEffect } from 'react';
import axios from "axios"




import { Line, XAxis, YAxis, Legend, Tooltip, LineChart, CartesianGrid } from 'recharts';
export default class Previsoes extends React.Component {

  state = {
    cidades: [],
    colunas: ["cidade", "data", "casos", "mortes"],
  };

  constructor(props) {
    super(props);
    
    this.refresh();
  }

  filter = (data, column, value) => {
    const cidades = [];

    Object.keys(data).forEach(key => {
      if (data[key][column] === value) {
        cidades.push(data[key]);
      }
    });

    return cidades;
  };

  refresh = () => {

    axios.get("http://localhost:5000/previsoes_covid/")
      .then(res => {
        let data = res.data;

        this.setState({ cidades: data });
      })
      .catch(err => console.error(err));
  };

render () {
  const { cidades, colunas } = this.state;
    return (
      <LineChart
        width={800}
        height={600}
        data={cidades}
        columns={colunas}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
        name='Previsão de casos'
          type=''
          dataKey='casos'
          stroke='#4B0082'
          activeDot={{r: 8}}
          />
          <Line
          name='Previsão de mortes'
          type=''
          dataKey='mortes'
          stroke='#FF0000'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='4 4'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='data'/>
        <Line  type="" dataKey="cidade" stroke="#4B0082" />
        <Legend />
      </LineChart>
    );
}
}
