import React, { Fragment } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (

    <Fragment>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {data.map(question => {
              return <SingleQuestion
                key={question.id}
                question={ question }
              />
            })}
          </section>
        </div>
      </main>
      </Fragment>
    )
}

export default App;
