import React, { Component } from "react";
import { Form, Input, Label } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const ButtonContainer = styled.button`
  width: 50%;
  color: white;
  font-size: 22px;
  border: none;
  background-color: #fffff;
  border-radius: 4px;

  @media (max-width: 1024px) {
    background-color: black;
  }
`;

const MemberP = styled.p`
  padding-top: 5%;
`;

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthday: '',
      accessCode: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthday: this.state.birthday,
        accessCode: this.state.accessCode
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.setToken(data.sessionToken);
        // props.updateID(data.ID);
        console.log(data.sessionToken);
      });
  };

  authToggle = (e) => {
    e.preventDefault();
    this.setState({active: !this.state.active});
};

  render(){
  return (
    <Container>
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          onChange={(e) => this.setState({firstName: e.target.value})}
          name="firstName"
          value={this.state.firstName}
          type="text"
          placeholder="First Name"
        />
        <br />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          onChange={(e) => this.setState({lastName: e.target.value})}
          name="lastName"
          value={this.state.lastName}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <Label htmlFor="birthday">Birthday</Label>
        <Input
          onChange={(e) => this.setState({birthday: e.target.value})}
          name="birthday"
          value={this.state.birthday}
          type="date"
          placeholder="Birthday"
        />
        <br />
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={(e) => this.setState({email: e.target.value})}
          name="email"
          value={this.state.email}
          type="email"
          placeholder="Email"
        />
        <br />
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={(e) => this.setState({password: e.target.value})}
          name="password"
          value={this.state.password}
          type="password"
          placeholder="Password"
          pattern="[A-Za-z]{8}"
          required
          title="8 characters minimum"
        />
        <br />
        <Label htmlFor="accessCode">Access Code</Label>
        <Input
          onChange={(e) => this.setState({accessCode: e.target.value})}
          name="accessCode"
          value={this.state.accessCode}
          type="accessCode"
          placeholder="Access Code"
        />
        <br />
        <ButtonContainer type="submit">Signup</ButtonContainer>
        <br />
        <MemberP>
        {/* <p>Already have an account? <button onClick={this.authToggle}>Get Managing!</button></p> */}
        </MemberP>
      </Form>
    </Container>
  );
};
}

export default Signup;
