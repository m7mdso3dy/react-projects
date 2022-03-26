import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={props.review.image} alt={props.review.name} className="person-img" />
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{props.review.name}</h4>
      <p className="job">{props.review.job}</p>
      <p className="info"> {props.review.text} </p>
      <div className="button-container">
        <button onClick={() => {
          props.chossingReviewHandler('prev')
        }} className="prev-btn">
          <FaChevronLeft/>
        </button>
        <button onClick={() => {
          props.chossingReviewHandler('next')
        }} className="next-btn">
          <FaChevronRight/>
        </button>
      </div>
      <button
        onClick={() => {
          props.chossingReviewHandler('rand')
        }}
        className="random-btn">
          surprise me
        </button>
      </article>
    )
};

export default Review;
