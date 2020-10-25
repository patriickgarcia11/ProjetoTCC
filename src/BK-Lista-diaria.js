import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap"
import { Spinner } from 'reactstrap';

import MUIDataTable from "mui-datatables";


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


    return (
    <div>
        {loading ? (
        <MUIDataTable 
        keyField="cidade"
        data = {cidades}
        columns={columns}
        // pagination={paginationFactory()}
        />) : (
            <Spinner color="primary" />
        )}
        
    </div>
    );
}

export default ListaDiaria;