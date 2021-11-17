import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components";

const Container = styled.div`
    margin: 0;
    padding: 0;
    font-size: 14px;
`;

const ButtonContainer = styled.button`
    width: 50%;
    color: black;
    font-size: 22px;
    border: none;
    background-color: #black;
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
            email: '',
            password: ''
        };
    }
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    authToggle = (e) => {
        e.preventDefault();
        this.setState({active: !this.state.active});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/user/signin", {
            method: 'POST',
            body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
    }


    render(){
    return (
        <Container>
            <Form onSubmit={this.handleSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <InputFont><Input onChange={(e) => this.setState({email: e.target.value})} name="email" value={this.state.email} placeholder="Username" type="email"/></InputFont>
                    {/* <br /> */}
                    <Label htmlFor="password">Password</Label>
                    <InputFont><Input onChange={(e) => this.setState({password: e.target.value})} name="password" value={this.state.password} placeholder="Password" type="password"/></InputFont>
                    {/* <br /> */}
                    <ButtonContainer type="submit">Login</ButtonContainer>
                    <br />
                    {/* <p>Don't have an account? <Button onClick={this.authToggle}>Start Managing!</Button></p> */}

            </Form>
        </Container>
     )
}
}

export default Login;