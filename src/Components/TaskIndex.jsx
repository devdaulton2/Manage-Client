import React from 'react';
import TaskCreate from './TaskCreate';
import TaskTable from './TaskTable';
import TaskEdit from './TaskEdit';
import { Container, Row, Col } from 'reactstrap';
import CommentEdit from './CommentEdit';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      updatePressed: false,
      taskToUpdate: {}
    }
    this.fetchTasks.bind(this)
  }

  setUpdatedTask = (event, task) => {
    this.setState({
        taskToUpdate: task, 
        updatePressed: true 
    })
}

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetch("http://localhost:3000/task/all", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((taskData) => {
        console.log(taskData)
        return this.setState({ tasks: taskData })
      })
    }

  render() {
    {console.log(this.state.tasks)}
    return (
      <Container>
        <Row>
          <Col md="10">
            <TaskCreate fetchTasks={this.fetchTasks} token={this.props.token} tasks={this.state.tasks} />
            <TaskTable fetchTasks={this.fetchTasks} tasks={this.state.tasks} t={this.updatePressed} update={this.setUpdatedTask} task={this.state.taskToUpdate} />
            {/* <TaskEdit tasks={this.state.tasks} /> */}
            
            {/* <TaskEdit t={this.updatePressed} update={this.setUpdatedTask} task={this.state.taskToUpdate} />  */}
          </Col>
          <Col md="2">
            <h2> </h2>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default TaskIndex