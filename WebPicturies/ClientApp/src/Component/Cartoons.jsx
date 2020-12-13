import React from "react";
import { DisplayPicture } from './DisplayPicture';

export class Cartoons extends React.Component {

  static displayName = Cartoons.name;

  render() {

    return (
      <div>
        <DisplayPicture name="Cartoons"></DisplayPicture>
      </div>
    );
  }
}

