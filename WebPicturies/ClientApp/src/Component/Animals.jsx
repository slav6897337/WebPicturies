import React from "react";
import { DisplayPicture } from './DisplayPicture';
export class Animals extends React.Component {  

static displayName = Animals.name;

render() {

    return (
      <div>
        <DisplayPicture name="Animals"></DisplayPicture>
      </div>
    );
  }
}

