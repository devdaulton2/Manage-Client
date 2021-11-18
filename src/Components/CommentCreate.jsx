import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';

class CommentCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            comment: ''
        };
    }


    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/comment/create`, {
            method: 'POST',
            body: JSON.stringify({ comment: {
                id: this.state.id,
                comment: this.state.comment
            }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((comment) => {
                // this.props.updateCommentsArray()
                console.log(comment);
                this.setState({
                    id: '',
                    comment: ''
                })
                this.props.fetchComments();
            })
    }

    // openModal = () => this.setState({ isOpen: true });
    // closeModal = () => this.setState({ isOpen: false });
    
    render() {
        return (
            <div>
                <h3>Submit a Comment, Compliment, or Suggestion</h3>
                <hr />
                {/* <Modal id="createModal" isOpen={true}> 
                    <ModalHeader>Create a Comment</ModalHeader>
                     <ModalBody> */}
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="comment">Comment</Label>
                                <Input id="comment" type="text" name="comment" value={this.state.comment} placeholder="Insert comment here" onChange={(e) => this.setState({comment: e.target.value})} />
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
export default CommentCreate;