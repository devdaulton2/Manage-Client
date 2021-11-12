import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import styled from 'styled-components';

const LogoContainer = styled.div`
    font-size: 22px;
    font-family: 'Garamond';
    color: white;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    background-color: #4d8bc9;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .15);
    position: relative;
    overflow: hidden;
    padding-left: 2%;
    padding-right: 2%;
    align-items: center;
    justify-content: center;
    right: 150px;
`;
const TopContainer = styled.div`
    width: 150%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 5%;
    padding-left: 5%;
    /* padding-bottom: 5em; */
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const HeaderText = styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    color: white;
    z-index: 10;
`;
const SmallText = styled.p`
    color: white;
    font-weight: 500;
    font-size: 14px;
    z-index: 10;
    margin: 0;
    margin-top: 10px;
`;
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Row = styled.div`
    height: 100%;
`
;
const Column = styled.div `
    float: right;
    @media (max-width: 1024px) {
        float: center;
    }
`
;

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {active: true};
    }
    authToggle = (e) => {
        e.preventDefault();
        this.setState({active: !this.state.active});
    }

    switchToLogin = (e) => {
        this.setState({active: "login"})
    }

    render() {
        let hour = new Date().getHours()
    return (
        <Row>
        <Column span="6">
        <Container>
            <TopContainer>
                <HeaderContainer>
                    <HeaderText>
                        <LogoContainer>{hour >= 4 && hour < 12 ? "Good Morning" : hour >= 12 && hour < 16 ? "Good Afternoon" : "Good Evening"}!</LogoContainer>
                         {/* Sign up */}
                    </HeaderText> 
                    <SmallText>
                        {/* {this.state.active === "login" ? 'Sign In' : 'Sign Up' } */}
                    </SmallText>
                </HeaderContainer>
            </TopContainer>
            <InnerContainer>
                {this.state.active ? <Login setToken={this.props.setToken} updateID={this.props.updateID}/> : <Signup setToken={this.props.setToken} updateID={this.props.updateID}/>}
            </InnerContainer>
            <button onClick={this.authToggle}>Toggle</button>
        </Container>
        </Column>
        </Row>
     );
}
}

export default Auth;