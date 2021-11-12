import './App.css';
import Auth from './Auth/Auth';
import Splash from './Home/Splash';
import SiteBar from './Components/Navbar'; 
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''  
    }
  }
componentWillMount() {
    const token = localStorage.getItem('token'); 
    if (token && !this.state.sessionToken) {   
      this.setState({ sessionToken: token });
    }
}
                
setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
}

protectedViews = () => {
  if (this.state.sessionToken === localStorage.getItem('token')) {
    return (
      <Switch>
        <Route path='/' exact>
          <Splash sessionToken={this.state.sessionToken} />
        </Route>
      </Switch>
    )
  } else {
    return (
      // <Route path="/auth" >
        <Auth setToken={this.setSessionState}/>
      // </Route>
    )
  }
}

logout = () => {
  this.setState({ 
    sessionToken: '', 
  });
  localStorage.clear();
}

  render() {
  return (
    <Router>
    <div className="App">
      <h1>Somehow I Manage</h1>

      {/* <Auth setSessionState= {this.setSessionState}/> */}
      <SiteBar clickLogout={this.logout} />
      {this.protectedViews()}
    </div>
    </Router>
  );
}
}

export default App;
