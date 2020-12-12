import React from "react";
import './Style/Home.css';

export class Home extends React.Component {

  static displayName = Home.name;
  
  render() {
    
    return (
      <div className="home">
       <img src="/img/Pictures/Animals/philip-swinburn-Z0tTnl_eOIo-unsplash.jpg" alt=""/>
       <img src="../img/Pictures/Animals/philip-swinburn-Z0tTnl_eOIo-unsplash.jpg" alt="dsf"/>

      </div>
    );
  }
}


