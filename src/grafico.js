
import React from 'react';
import axios from "axios";

import { Line, XAxis, YAxis, Legend, Tooltip, LineChart, CartesianGrid } from 'recharts';
export default class ListaDiaria extends React.Component {

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

    axios.get("http://localhost:5000/lista_diaria/")
      .then(res => {
        let data = res.data;

        this.setState({ cidades: data });
      })
      .catch(err => console.error(err));
  };

  render() {

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
          type='cidade'
          dataKey='casos'
          stroke='#FF8C00'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='4 4'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='data'/>
        <Line  name="Cidade"type="monotone" dataKey="cidade" stroke="#FF8C00" />
        <XAxis type="number" domain={['dataMin', 'dataMax']} />
        <Legend />
      </LineChart>
    );
  }
}