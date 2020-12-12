import React, { Component } from 'react';

import './Style/NavMenu.css';

export class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], loading: true, error: null };
    }

    static displayName = NavMenu.name;

    componentDidMount() {
        fetch("ContainPictures")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        items: result
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

    static RenderCategory(items) {
        return (
            <div>
                {items.map(item => (
                    <button className='buttonCategory' src=''>{item}</button>
                ))}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : NavMenu.RenderCategory(this.state.items);
        return (
            <div className="navMenu">                
                {contents}
            </div>
        );
    }

    async DisplayCategory() {
        const response = await fetch("ContainPictures");
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}