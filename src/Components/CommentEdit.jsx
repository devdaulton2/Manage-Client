import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class CommentEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.comment.id,
            comment: this.props.comment.comment,
            modal: false
        };
    }

    commentUpdate = (event, comment) => {
        event.preventDefault();
        fetch(`http://localhost:3000/comment/update/${this.props.comment.id}`, {
          method: 'PUT',
          body: JSON.stringify({ comment: comment }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
        .then((res) => {
          this.setState({ updatePressed: false })
          this.props.fetchComments();
        })
      }

        toggle = () => this.setState({ modal: !this.state.modal});

    render() {
        console.log(this.props.token)
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader close={<Button className="close" onClick={this.toggle}>&times;</Button>} >Update Comment</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.commentUpdate} >
                    <FormGroup>
                        <Label for="comment">Comment:</Label>
                        <Input id="comment" type="comment" name="comment" defaultValue={this.state.comment} placeholder="Update comment here" onChange={(e) => this.setState({comment: e.target})} />
                    </FormGroup>
                    <Button type="submit" color="secondary"> Submit </Button>
                </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default CommentEdit;