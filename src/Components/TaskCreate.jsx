import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';

class TaskCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            type: '',
            subType: '',
            details: '',
            expectedSol: '',
            dueDate: ''
        };
        console.log(this.props)
    }


    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/task/create`, {
            method: 'POST',
            body: JSON.stringify({ task: {
                id: this.state.id,
                type: this.state.type,
                subType: this.state.subType,
                details: this.state.details,
                expectedSol: this.state.expectedSol,
                dueDate: this.state.dueDate
            } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((task) => {
                // this.props.updateTasksArray()
                this.setState({
                    id: '',
                    type: '',
                    subType: '',
                    details: '',
                    expectedSol: '',
                    dueDate: ''
                })
                this.props.fetchTasks();
            })
    }

    // openModal = () => this.setState({ isOpen: true });
    // closeModal = () => this.setState({ isOpen: false });
    
    render() {
        return (
            <div>
                {/* <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#createModal">Create a Task</button> */}
                <h3>Create a Task</h3>
                <hr />
                {/* <Modal id="createModal" isOpen={true}> 
                    <ModalHeader>Create a Task</ModalHeader>
                     <ModalBody> */}
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="type">Type</Label>
                                <Input id="type" type="select" name="type" value={this.state.type} placeholder="Select Type" onChange={(e) => this.setState({type: e.target.value})}> 
                                <option>Conflict</option>
                                <option>Event</option>
                                <option>Scheduling</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="subType">SubType</Label>
                                <Input id="subtype" type="select" name="subType" value={this.state.subType} placeholder="Select SubType" onChange={(e) => this.setState({subType: e.target.value})}>
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
                                <Input id="details" type="text" name="details" value={this.state.details} placeholder="Describe the task you need assistance with" onChange={(e) => this.setState({details: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="expectedSol">Expected Outcome</Label>
                                <Input id="expectedSol" type="text" name="expectedSol" value={this.state.expectedSol} placeholder="What resolution are you hoping for?" onChange={(e) => this.setState({expectedSol: e.target.value})} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="dueDate">Resolved By:</Label>
                                <Input id="dueDate" type="Date" name="dueDate" value={this.state.dueDate} placeholder="Resolution Date" onChange={(e) => this.setState({dueDate: e.target.value})} />
                            </FormGroup>
                            <Button type="submit" color="secondary"> Submit </Button>
                            {/* <Button variant="secondary">Close</Button> */}
                        </Form>
                    {/* </ModalBody>
                </Modal> */}
            </div>
        )
    }
}
export default TaskCreate;