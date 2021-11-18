import React, { Component } from 'react';
import TaskIndex from '../Components/TaskIndex';
import CommentIndex from '../Components/CommentIndex';
import SiteBar from '../Components/Navbar';

const Splash = (props) => {
  let hour = new Date().getHours()
  return (
      <div>
        {/* <SiteBar /> */}
        <h1>{hour >= 4 && hour < 12 ? "Good Morning" : hour >= 12 && hour < 16 ? "Good Afternoon" : "Good Evening"}! </h1>
          <TaskIndex token={props.sessionToken} />
          <CommentIndex token={props.sessionToken} />
      </div>
  ) 
}
export default Splash;