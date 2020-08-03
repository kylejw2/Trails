import React from 'react';
import Trail from './trail';

export default class Trails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: []
        }

    }

    async componentDidMount() {
        const url = `${process.env.REACT_APP_API_URL}/api/trails`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({trails: data});
    }

    render() {
        const trails = this.state.trails.map(trail => <Trail 
            key={trail._id}
            name={trail.name}
        />);

        return (
            <ul>
                {trails}
            </ul>
        )
    }
}