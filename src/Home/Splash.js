import React, { Component } from 'react';
import TaskIndex from '../Components/TaskIndex';

const Splash = (props) => {
  return (
      <div>
          <TaskIndex token={props.sessionToken} />
      </div>
  ) 
}
export default Splash;