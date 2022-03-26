import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const removeTourHandler = (tourId) => {
    const updatedTours = tours.filter(tour => tour.id !== tourId);
    setTours(updatedTours)
  }
  useEffect(() => {
    setIsloading(true);
    fetch(url)
      .then(res => {
        return res.json();
      }).then(data => {
        setTours(data);
        setIsloading(false);
      }).catch(err => {
        setIsloading(false);
        setError(true);
      })
  }, []);
  return (
    <Fragment>
      {
        isLoading && 
        <main>
            <Loading />
        </main>
      }
      {
        !isLoading && error && 
        <main>
            <h2>
              something went wrong try again later
            </h2>
        </main>
      }
      {
        !isLoading && !error && !(tours.length) &&
        <main>
            <h2>There no tours right now</h2>
        </main>
      }
      {
        !isLoading && !error && (tours.length !== 0) &&
        <main>
            <Tours
              removeTour = {removeTourHandler}
              tours={tours}
            />
        </main>
      }
    </Fragment>
  )
}

export default App
