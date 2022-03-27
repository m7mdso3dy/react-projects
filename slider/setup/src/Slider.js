import React, { Fragment } from "react"
import Person from './Person'

const Slider = props => {
    const {data,activeSlide} = props
    return(
        <Fragment>
            {
          data.map((person, i) => {
            let currentSlide = '';
            i === activeSlide ? currentSlide = 'activeSlide'
              : ((activeSlide === i - 1) ||(i===0&& activeSlide ===data.length -1)) ? currentSlide = 'lastSlide'
              : currentSlide = 'nextSlide';
           
            return (
              <Person
                currentSlide = {currentSlide}
                person = {person}
              />
            )
          })
        }
        </Fragment>
        
    )
}

export default Slider