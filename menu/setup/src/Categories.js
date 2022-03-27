import React, { Fragment } from 'react';

const Categories = (props) => {
  console.log()
  return (
    <Fragment>
      <div className="btn-container">
       
        {
          ['all',...props.categories].map(cata => {
            return (
              <button className={`filter-btn ${props.active === cata && "btn-active"}`}
                onClick={() => {
                  props.chossingMenu(cata);
                }}
              >
                {cata}
              </button>
            )
          })
        }
      </div>
    </Fragment>
  )
};

export default Categories;
