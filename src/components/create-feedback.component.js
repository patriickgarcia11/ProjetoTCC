import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Container } from 'reactstrap';


export default class CreateFeedback extends Component {
  constructor(props) {
    super();

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      description: '',
      date: new Date(),
      users: []
    }
    
  }
 
  
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }


  onChangeDate(date) {
    this.setState({
      date: date
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const feedback = {
      username: this.state.username,
      email: this.state.email,
      description: this.state.description,
      date: this.state.date
    }


    axios.post('http://localhost:5000/feedback/add', feedback)
      .then(res => console.log(res.data), alert('Feedback enviado com sucesso!'));
    window.location = '/create';
  }

  render() {
    return (
    <Container className="alinfeedback" fluid={true}>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <h3>Deixe seu Feedback</h3>
      <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
        </div>
          <div className="form-group"> 
            <label>E-mail: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
        </div>
        <div className="form-group"> 
          <label>Feedback: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Enviar" className="btn btn-primary" />
        </div>
      </form>
      </Col>
      </Row>
    </Container>
    
    )
  }
}