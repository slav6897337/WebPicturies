import React from "react";
import { DisplayPicture } from './DisplayPicture';

export class Movies extends React.Component {

  static displayName = Movies.name;
  
  render() {

    return (
      <div>
        <DisplayPicture name="Movies"></DisplayPicture>
      </div>
    );
  }
}

