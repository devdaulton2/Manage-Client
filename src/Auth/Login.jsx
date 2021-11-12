import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";

const Container = styled.div`
    margin: 0;
    padding: 0;
    font-size: 14px;
`;

const ButtonContainer = styled.button`
    width: 100%;
    color: #fffff;
    font-size: 22px;
    border: none;
    background-color: #fffff;
    border-radius: 4px;

    @media (max-width: 1024px) {
        background-color: black;
    }
`;

const InputFont = styled.div`
font-family: 'Roboto Mono', monospace;
font-size: large;
`

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (event) => {
        fetch("http://localhost:3000/user/signin", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
        event.preventDefault()
    }
    render(){
    return (
        <Container>
            <Form onSubmit={this.handleSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <InputFont><Input onChange={(e) => this.setState({username: e.target.value})} name="username" value={this.state.username} placeholder="Username" type="email"/></InputFont>
                    {/* <br /> */}
                    <Label htmlFor="password">Password</Label>
                    <InputFont><Input onChange={(e) => this.setState({password: e.target.value})} name="password" value={this.state.password} placeholder="Password" type="password"/></InputFont>
                    {/* <br /> */}
                    <ButtonContainer type="submit">Login</ButtonContainer>
                    <br />
                    <p>Don't have an account? <a href="/signup" onClick={this.props.switchToSignup}>Start Managing</a></p>

            </Form>
        </Container>
     )
}
}

export default Login;