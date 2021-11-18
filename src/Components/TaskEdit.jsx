import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class TaskEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.task.id,
            type: this.props.task.type,
            subType: this.props.task.subType,
            details: this.props.task.details,
            expectedSol: this.props.task.expectedSol,
            dueDate: this.props.task.dueDate,
            solved: this.props.task.dueDate,
            modal: false
        };
    }

    taskUpdate = (event, task) => {
        event.preventDefault();
        fetch(`http://localhost:3000/task/update/${task.id}`, {
          method: 'PUT',
          body: JSON.stringify({ task: task }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => {
          this.setState({ updatePressed: false })
          this.fetchTasks();
        })
      }
    // componentWillMount() {
    //     console.log(this.props.task)
    //     // this.setState({
    //     //     id: this.props.task.id,
    //     //     type: this.props.task.type,
    //     //     subType: this.props.task.subType,
    //     //     details: this.props.task.details,
    //     //     expectedSol: this.props.task.expectedSol,
    //     //     dueDate: ''
    //     // })
    // }

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props)
        this.props.update(event, this.state)
    }
  
    toggle = () => this.setState({ modal: !this.state.modal})

    render() {
        console.log(this.props)
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader close={<Button className="close" onClick={this.toggle}>&times;</Button>} >Update Task</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input id="type" type="select" name="type" defaultValue={this.state.type} placeholder="Select Type" onChange={(e) => this.setState({type: e.target})} > 
                        <option>Conflict</option>
                        <option>Event</option>
                        <option>Scheduling</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="subType">SubType</Label>
                        <Input id="subtype" type="select" name="subType" value={this.state.subType} placeholder="Select SubType" onChange={(e) => this.setState({subType: e.target})} >
                            <option>Interpersonal</option>
                            <option>Request Event</option>
                            <option>Event Details</option>
                            <option>Vendor</option>
                            <option>Request Change</option>
                            <option></option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="details">Details</Label>
                        <Input id="details" type="text" name="details" defaultValue={this.state.details} placeholder="Describe the task you need assistance with" onChange={(e) => this.setState({details: e.target})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="expectedSol">Expected Outcome</Label>
                        <Input id="expectedSol" type="text" name="expectedSol" defaultValue={this.state.expectedSol} placeholder="What resolution are you hoping for?" onChange={(e) => this.setState({expectedSol: e.target})}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dueDate">Resolved By:</Label>
                        <Input id="dueDate" type="Date" name="dueDate" defaultValue={this.state.dueDate} placeholder="Resolution Date" onChange={(e) => this.setState({dueDate: e.target})}  />
                    </FormGroup>
                    <FormGroup>
                        <Label >Solved?</Label>
                        <Input id="solved" type="radio" name="radio" checked={true} value={this.state.solved} onChange={(e) => this.setState({ solved: e.target})}></Input> 
                    </ FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default TaskEdit;