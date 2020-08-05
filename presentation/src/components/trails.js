import React from 'react';
import Trail from './trail';
import AddTrail from './addTrail'; //

export default class Trails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: []
        }
        this.refresh = this.refresh.bind(this);
        this.url = `${process.env.REACT_APP_API_URL}/trails`;
    }

    componentDidMount() {
        this.refresh();
    }

    async refresh() {
        const response = await fetch(this.url);
        const data = await response.json();
        this.setState({trails: data});
    }

    render() {
        const trails = this.state.trails.map(trail => <Trail 
            key={trail._id}
            id={trail._id}
            name={trail.name}
            length={trail.length}
            location={trail.location}
            reviews={trail.reviews}
            refresh={this.refresh}
        />);
        return (
            <>
            <AddTrail refresh={this.refresh}/>
            <ul>
                {trails}
            </ul>
            </>
        )
    }
}