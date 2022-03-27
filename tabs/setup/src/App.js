import React, { useState, useEffect, Fragment } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDisplayedJob, setCurrentDisplayedJob] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <Fragment>
      {
        isLoading && !jobs.length && <section className='section loading'>
          <h1>Loading...</h1>
        </section>
      }
      {
        !isLoading && jobs.length &&
        <section className='section'>
            <div className="title">
              <h2>experience</h2>
              <div className="underline"></div>
            </div>
            <div className="jobs-center">
              <div className="btn-container">
                {
                  jobs.map((job,i) => {
                    return (
                      <button key={job.id}
                        className={`job-btn ${currentDisplayedJob===i && "active-btn"}`}
                        onClick={() => {
                          setCurrentDisplayedJob(i);
                        }}
                      >
                        {job.company}
                      </button>
                    )
                  })
                }
              </div>
              <article className="job-info">
                <h3> {jobs[currentDisplayedJob].title} </h3>
                <h4> {jobs[currentDisplayedJob].company} </h4>
                <p className="job-date"> {jobs[currentDisplayedJob].dates} </p>
                {jobs[currentDisplayedJob].duties.map(duty => {
                  return (
                    <div className="job-desc">
                      <FaAngleDoubleRight className='job-icon' />
                      <p> {duty} </p>
                    </div>
                  )
                })}
              </article>
            </div>
        </section>
      }
    </Fragment>
  )
}

export default App
