import React from "react";
import './Style/Home.css';

export class Home extends React.Component {

  static displayName = Home.name;
  
  render() {
    return (      
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
}


