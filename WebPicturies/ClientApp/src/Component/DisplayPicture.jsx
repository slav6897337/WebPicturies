import React from "react";

export class DisplayPicture extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { pictures: [], loading: true, error: null };
}
static displayName = DisplayPicture.name;

componentDidMount() {
  fetch("ContainPictures?category=" + this.props.name)
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  loading: false,
                  pictures: result
              });
          },
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
          }
      )
}

static RenderCategory(pictures) {
    return (
        <div>
            {pictures.map(pic => (
              
             <img src={pic} height="200" width="260" alt="dsf"/>
              
            ))}
        </div>
    );
}

render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : DisplayPicture.RenderCategory(this.state.pictures);
    return (
        <div>                
            {contents}
        </div>
    );
}
}
