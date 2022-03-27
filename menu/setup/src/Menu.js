import React, { Fragment } from 'react';

const Menu = (props) => {
  return (
    <Fragment>
      <div className="section-center">
        {
          props.items.map(item => {
            return (
              <article key={item.id} className="menu-item">
                <img src={item.img} alt={item.title} className='photo' />
                <div className="item-info">
                  <header>
                    <h4> {item.title} </h4>
                    <h4 className="price">{item.price} $</h4>
                  </header>
                  <p className="item-text">
                    {item.desc}
                  </p>
                </div>
              </article>
            )
          })
        }
      </div>
    </Fragment>
  )
};

export default Menu;
