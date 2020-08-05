import React from 'react';

const Trail = (props) => {
    const eraseTrail = async () => {
        const options = {
            method: 'DELETE'
        };
        await fetch(`${process.env.REACT_APP_API_URL}/api/trails/${props.id}`, options);
        props.refresh();
    }
    return (
        <li>
            {props.name}
            <i className="fa fa-trash-o" onClick={eraseTrail}></i>
        </li>
    )
}
export default Trail;