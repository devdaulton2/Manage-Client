import React from 'react';
import CommentCreate from './CommentCreate';
import CommentTable from './CommentTable';
import CommentEdit from './CommentEdit';
import { Container, Row, Col } from 'reactstrap';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      updatePressed: false,
      commentToUpdate: {}
    }
    this.fetchComments.bind(this)
  }

  deleteComments = (comment) => {
    fetch(`http://localhost:3000/comment/delete/${comment.id}`, {
        method: 'DELETE',
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token
        }),
    }).then((res) => console.log(res))
    .then(this.fetchComments())
  }

    setUpdatedComment = (event, comment) => {
      this.setState({
          commentToUpdate: comment, 
          updatePressed: true 
      })
  }

  componentDidMount() {
    this.fetchComments();
  }
  fetchComments = () => {
    fetch("http://localhost:3000/comment/all", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((commentData) => {
        console.log(commentData)
        return this.setState({ comments: commentData })
      })
  }

  render() {
    {console.log(this.state.comments)}
    return (
      <Container>
        <Row>
          <Col md="10">
            <CommentCreate fetchComments={this.fetchComments} token={this.props.token} comments={this.state.comments}/>
            <CommentTable fetchComments={this.fetchComments} deleteComments={this.deleteComments} comments={this.state.comments} />
            {/* <CommentEdit comments={this.state.comments} /> */}
            {
            this.state.updatePressed ? <CommentEdit token={this.props.token} t={this.state.updatePressed} update={this.commentUpdate} comment={this.state.commentToUpdate} />
            : <div></div>
          }
          </Col>
          <Col md="2">
            <h2> </h2>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default CommentIndex