import React from "react";
import { DisplayPicture } from './DisplayPicture';
export class Cars extends React.Component {

  static displayName = Cars.name;

  render() {

    return (
      <div>
        <DisplayPicture name="Cars"></DisplayPicture>
      </div>
    );
  }
}

