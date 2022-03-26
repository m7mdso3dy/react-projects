import React from "react";
import classes from './Person.module.css'

const Person = (props) => {
    return (
            <li className={classes}>
                <h3>{props.person.name }</h3>
                <p>{ props.person.age}</p>
                <img src={props.person.image} alt={`${props.person.name} `} />
            </li>
        
    )
}

export default Person;