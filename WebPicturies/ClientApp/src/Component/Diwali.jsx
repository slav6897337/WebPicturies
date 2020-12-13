import React from "react";
import { DisplayPicture } from './DisplayPicture';

export class Diwali extends React.Component {

  static displayName = Diwali.name;
  
  render() {

    return (
      <div>
        <DisplayPicture name="Diwali"></DisplayPicture>
      </div>
    );
  }
}

