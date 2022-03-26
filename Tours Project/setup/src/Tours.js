import React from 'react';
import { Fragment } from 'react';
import Tour from './Tour';
const Tours = (props) => {
  return (
    <Fragment>
      <section>
        <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {
        props.tours.map(tour => {
          return (
            <Tour
              removeTour = {props.removeTour}
              key={tour.id}
              tour={tour}
            ></Tour>
          )
        })
      }
      </div>
      </section>
    </Fragment>
  )
};

export default Tours;
