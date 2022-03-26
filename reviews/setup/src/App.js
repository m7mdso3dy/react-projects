import React, { Fragment, useState } from 'react';
import Review from './Review';
import reviews from './data'
function App() {
  // const [reviews, setReviews] = useState(data);
  const [currentReview, setCurrentReview] = useState(0);
  const chossingReviewHandler = (move) => {
    if (move === 'next') {
      setCurrentReview(old => {
        old === reviews.length-1 ? old = 0 : old++; 
        return old;
      });
    } else if (move === 'prev') {
      setCurrentReview(old => {
        old === 0 ? old = reviews.length-1 : old--; 
        return old;
      });
    } else {
      setCurrentReview(Math.floor(Math.random()* reviews.length))
    }
  }
  return (
    <Fragment>
      <main>
        <section className='container'>
          <div className="title">
            <h2>our reviews</h2>
            <div className="unnder-line">
            </div>
          </div>
          <Review
            chossingReviewHandler = {chossingReviewHandler}
            review = {reviews[currentReview]}
          />
        </section>
      </main>
    </Fragment>
      
      
    )
}

export default App;
