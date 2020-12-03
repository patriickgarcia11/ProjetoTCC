import React, { useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import { List1 } from "./styles"
import { Col } from 'reactstrap';
import "./App.css";
import axios from "axios"

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
        <div>
            <section>
                <List1>
                    <h3>Lista De Casos e Mortes Diários</h3>
                </List1>
            </section>

    <Col>
        <MUIDataTable keyField="cidade" data={cidades} columns={colunas} />
    </Col>
    <h6 tag="h6" className="mb-2 text-muted">Fonte: Brasil.io</h6>
        </div>
    );
        }
    }