import React from 'react';
import { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  
  return (
    <article className='single-tour'>
      <img src={props.tour.image} alt={props.tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.tour.name }</h4>
          <h4 className="tour-price">{props.tour.price}</h4>
        </div>
        <p>
          {
            !readMore && `${props.tour.info.substring(0, 200)}...`
            
          }
          {readMore &&
            props.tour.info}
          <button onClick={() => {
            setReadMore((pre) => {
              return !pre
            })
          }}>
            {
              readMore && `showLess`
            }
            {
              !readMore && `showMore`
            }
          </button>
        </p>
        <button onClick={() => {
          props.removeTour(props.tour.id)
        }} className="delete-btn">
          not intersted
        </button>
      </footer>
    </article>
  )
};

export default Tour;
