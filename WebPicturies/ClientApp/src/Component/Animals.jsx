import React from "react";

export class Animals extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { pictures: [], loading: true, error: null };
}
static displayName = Animals.name;

componentDidMount() {
  fetch("ContainPictures?category=Animals")
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
              
             <img src="Pictures\Animals\philip-swinburn-Z0tTnl_eOIo-unsplash.jpg" alt="dsf"/>
              
            ))}
        </div>
    );
}

render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Animals.RenderCategory(this.state.pictures);
    return (
        <div>                
            {contents}
        </div>
    );
}
}
