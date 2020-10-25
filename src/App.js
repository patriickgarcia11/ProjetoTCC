import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Switch, Route, Router, Link } from 'react-router-dom';
import ViewDicas from './Dicas';
import ViewHome from './Home';



import FeedbackList from "./components/feedback-list.component";
import CreateFeedback from "./components/create-feedback.component";
// import Mapalistdiario from "./components/list_covid_diario.component";





import { Footers } from './styles';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, 
  Row, 
  Col
} from 'reactstrap';



const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Row>
        <Col>
      <Navbar className="bg-dark" light expand="md">
        <NavbarBrand className="nav-item nav-link" to="page1"><i className="fas fa-hospital-user"></i>&nbsp;Saúde e Mapeamento</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link className="nav-item nav-link" to="page1">Inicio</Link>
            </NavItem>
            <NavItem>
            <Link className="nav-item nav-link" to="page2">Dicas</Link>
            </NavItem>
            <NavItem>
            <Link className=" nav-item nav-link" to="create">Feedback</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Col>
      </Row>
      

        <main>
        <Switch>
          <Route path="/page1" component={ViewHome}/>
          <Route path="/page2" component={ViewDicas}/>
          <Route path="/listafeed" exact component={FeedbackList} />
          <Route path="/create" component={CreateFeedback} />
          
        </Switch>
        </main>



        <Footers className="bg-dark">

            <p>©2020 Todos os direitos reservados.</p>

        </Footers>
      </div>
    
  );
};


export default App;