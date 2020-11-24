import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';




const Feedback = props => (
  <tr>
    <td>{props.feedback.username}</td>
    <td>{props.feedback.description}</td>
    <td>{props.feedback.date.substring(0,10)}</td>
  </tr>
)

export default class FeedbackList extends Component {
  constructor(props) {
    super();

    this.state = {feedbacks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/feedback/')
      .then(response => {
        this.setState({ feedbacks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  
  feedbackList() {
    return this.state.feedbacks.map(currentfeedback => {
      return <Feedback feedback={currentfeedback} key={currentfeedback._id}/>;
    })
  }

  render() {
    return (
      <Container className="themed-container" fluid={false}>
        <Row>
        <Col>
        <h3>Lista dos feedbacks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nome</th>
              <th>Feedback</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.feedbackList() }
          </tbody>
        </table>
        </Col>
        </Row>
      </Container>
    )
  }
}