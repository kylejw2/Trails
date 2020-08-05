import React from 'react';

export default class UpsertTrail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            length: this.props.length,
            location: this.props.location,
            reviews: this.props.reviews
        }
        this.url = `${process.env.REACT_APP_API_URL}/trails/${this.props.id}`;
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAddReview = this.handleClickAddReview.bind(this);
        this.handleChangeReview = this.handleChangeReview.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick(event) {
        event.preventDefault();
        const {...data} = this.state;
        this.upsertTrail(data);
    }

    handleClickAddReview(event) {
        event.preventDefault();
        const reviews = this.state.reviews.concat(['']);
        this.setState({reviews: reviews});
    }

    handleChangeReview(event, index) {
        const updatedReview = this.state.reviews.concat();
        updatedReview[index] = event.target.value;
        this.setState({reviews: updatedReview});
    }
    
    deleteReview(event, index) {
        event.preventDefault();
        const reviews = this.state.reviews.concat();
        reviews.splice(index, 1);
        this.setState({reviews: reviews})
    }

    async upsertTrail(trail) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trail)
        }
        await fetch(this.url, options);
        this.props.refresh();
    }

    render() {
        const reviews = this.state.reviews.map((review, index) => {
            return (
                <div key={index}>
                <input 
                type='text'
                className='review'
                placeholder={`Review ${index + 1}`} 
                value={review} 
                onChange={event => this.handleChangeReview(event, index)}/>
                <button onClick={event => this.deleteReview(event, index)}>Delete review</button>
                </div>
            )
        });
        return (
            <form className='upsert-trail'>
                <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                <input type='number' name='length' placeholder='Length' value={this.state.length} onChange={this.handleChange}/>
                <input type='text' name='location' placeholder='Location' value={this.state.location} onChange={this.handleChange}/>
                {reviews}
                <button className='add-rvw-btn' onClick={this.handleClickAddReview}>Add review</button>
                <button type='submit' onClick={this.handleClick}>Update trail</button>
            </form>
        );
    }
}