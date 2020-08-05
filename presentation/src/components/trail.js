import React, { useState } from 'react';
import UpsertTrail from './upsertTrail';

const Trail = (props) => {
    const [updateShown, setUpdate] = useState(false);
    const eraseTrail = async () => {
        const options = {
            method: 'DELETE'
        };
        await fetch(`${process.env.REACT_APP_API_URL}/trails/${props.id}`, options);
        props.refresh();
    }
    const toggleMods = () => {
        setUpdate(updateShownPrev => !updateShownPrev);
    }

    return (
        <>
        <li>
            {props.name}
            <i className="fa fa-search-plus" onClick={toggleMods}></i>
            <i className="fa fa-trash-o" onClick={eraseTrail}></i>
        </li>
        {
            updateShown ? 
            <UpsertTrail 
            name={props.name}
            id={props.id}
            length={props.length}
            location={props.location}
            reviews={props.reviews}
            refresh={props.refresh}
            />
            : ''
        }
        </>
    )
}
export default Trail;