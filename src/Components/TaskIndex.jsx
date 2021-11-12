import React from 'react';
import TaskCreate from './TaskCreate';
import TaskTable from './TaskTable';
import { Container, Row, Col } from 'reactstrap';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }
  componentWillMount() {
    this.fetchTasks()
  }
  fetchTasks = () => {
    fetch("http://localhost:3000/task/", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ tasks: logData })
      })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <TaskCreate />
            <TaskTable tasks={this.state.tasks} />
            <TaskIndex tasks={this.state.tasks} />
          </Col>
          <Col md="9">
            <h2> </h2>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default TaskIndex