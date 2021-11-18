import React from 'react';
import { Table, Button } from 'reactstrap';
import CommentEdit from './CommentEdit';

const CommentTable = (props) => {
     console.log(props)
    return (
        <div>
            <h3>Comments</h3>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Comment ID</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.comments.map((comment, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{comment.id}</th>
                                    <td>{comment.comment}</td>
                                    <td>
                                        <Button id={comment.id} onClick={props.delete} color="secondary">Delete</Button>|
                                    
                                        <CommentEdit fetchComments={props.fetchComments} comment={comment} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default CommentTable;