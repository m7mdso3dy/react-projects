import React from "react";
import { FaQuoteRight } from 'react-icons/fa';
const Person = (props) => {
    const {person , currentSlide} = props
    return (
        <article className={currentSlide}>
                <img src={person.image} alt={person.name} className='person-img' />
                <h4> {person.name} </h4>
                <p className="title">
                  {person.title}
                </p>
                <p className="text">
                  {person.quote}
                </p>
                <FaQuoteRight className='icon' />
              </article>
    )
}

export default Person;