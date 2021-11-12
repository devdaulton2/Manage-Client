import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class TaskEdit extends React.Component {
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
    }
    componentWillMount() {
        this.setState({
            id: this.props.task.id,
            type: this.props.task.type,
            subType: this.props.task.subType,
            details: this.props.task.details,
            expectedSol: this.props.task.expectedSol,
            dueDate: ''
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }
    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Update Task</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input id="type" type="select" name="type" value={this.state.type} placeholder="Select Type" onChange={this.handleChange}> 
                        <option>Conflict</option>
                        <option>Event</option>
                        <option>Scheduling</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="subType">SubType</Label>
                        <Input id="subtype" type="select" name="subType" value={this.state.subType} placeholder="Select SubType" onChange={this.handleChange}>
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
                        <Input id="details" type="text" name="details" value={this.state.details} placeholder="Describe the task you need assistance with" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="expectedSol">Expected Outcome</Label>
                        <Input id="expectedSol" type="text" name="expectedSol" value={this.state.expectedSol} placeholder="What resolution are you hoping for?" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dueDate">Resolved By:</Label>
                        <Input id="dueDate" type="Date" name="dueDate" value={this.state.dueDate} placeholder="Resolution Date" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default TaskEdit;