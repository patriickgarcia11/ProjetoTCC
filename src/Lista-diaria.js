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
          const data = await axios.get(
              "http://localhost:5000/lista_diaria/"
              );
              console.log(data);
              setCidade(data.data);
              setLoading(true);

      } catch (e) {
          console.log(e);
      }
  };

//   const columns = [
//       {dataField: "cidade", text: "cidade"},
//       {dataField: "data", text: "data"},
//       {dataField: "casos", text: "casos"},
//       {dataField: "mortes", text: "mortes"}
//   ];

const columns = ["cidade", "data", "casos", "mortes"];


  useEffect(() => {
      getListadata();
  }, []);

//   const options = {
//     filterType: 'checkbox',
//   };
  

    return (
        
    <div>
        <section>
        <List1>
          <h3>Lista de casos diarios</h3>
        </List1>
        </section>
        
            <Col>
        
        {/* {loading ? (
        <BootstrapTable 
        keyField="cidade"
        data = {cidades}
        columns={columns}
        pagination={paginationFactory()}
        />) : (
            <Spinner color="primary" />
        )} */}

{loading ? (
        <MUIDataTable 
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