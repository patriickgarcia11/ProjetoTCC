import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import { Col, Container, Spinner } from 'reactstrap';

import MUIDataTable from "mui-datatables";



import { List1 } from "./styles"


const ListaDiaria = () => {
  const [cidades, setCidade] = useState([]);
  const [loading, setLoading] = useState(false);

  const getListadata = async () => {
      try {
          const data = await axios.get("http://localhost:5000/lista_diaria/");
              setCidade(data.data);
              setLoading(true);

      } catch (e) {
          console.log(e);
      }
  };


const columns = ["cidade", "data", "casos", "mortes"];


  useEffect(() => {
      getListadata();
  }, []);

  

    return (
        
    <div>
        <section>
        <List1>
          <h3>Lista De Casos e Mortes</h3>
        </List1>
        </section>
        
            <Col>
{loading ? (
        <MUIDataTable 
        keyField="cidade"
        data={cidades} 
        columns={columns} 
        />) : (
            <Spinner color="primary" />
        )}
        </Col>
        
    </div>
    );
}

export default ListaDiaria;