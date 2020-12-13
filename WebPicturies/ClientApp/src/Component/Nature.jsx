import React from "react";
import { DisplayPicture } from './DisplayPicture';

export class Nature extends React.Component {

  static displayName = Nature.name;
  
  render() {

    return (
      <div>
        <DisplayPicture name="Nature"></DisplayPicture>
      </div>
    );
  }
}

