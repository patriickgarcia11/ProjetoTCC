import React, {useState, useEffect } from 'react';
import axios from "axios"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';


const Previsoes = () => {
    const [cidades, setCidade] = useState([]);
    // const [loading, setLoading] = useState(false);
  
    const getListadata = async () => {
        try {
            const data = await axios.get(
                "http://localhost:5000/previsoes_covid/"
                );
                console.log(data);
                setCidade(data.data);
                // setLoading(true);
  
        } catch (e) {
            console.log(e);
        }
    };

const columns = ["cidade", "data", "casos", "mortes"];

useEffect(() => {
    getListadata();
}, []);


    return (
      <LineChart
        width={800}
        height={600}
        data={cidades}
        columns={columns}
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

export default Previsoes;