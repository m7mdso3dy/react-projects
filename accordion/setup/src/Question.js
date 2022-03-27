import React, { Fragment, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [showinfo, setShowInfo] = useState(false);
  return (
    <Fragment>
      <article className='question'>
        <header>
          <h4> {props.question.title} </h4>
          <button className='btn' onClick={() => {
            setShowInfo(pre=>!pre)
          }}> 
            {showinfo && <AiOutlineMinus />}
            {!showinfo && <AiOutlinePlus/>}
          </button>
        </header>
          <p>
          {showinfo && props.question.info}
          </p>
        </article>
    </Fragment>
  )
};

export default Question;
