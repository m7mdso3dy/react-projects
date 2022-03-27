import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Slider from './Slider';
import SectionTitle from './SectionTitle';

import data from './data';
function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlideHandler = (move) => {
    if (move === 'next') {
      setActiveSlide(pre => {
        pre === data.length - 1 ? pre = 0 : pre++;
        return pre;
      }
      );
    } else {
      setActiveSlide(pre => {
        pre === 0 ? pre = data.length - 1 : pre--;
        return pre;
      }
      );
    }
  }
  useEffect(() => {
    setInterval(() => {
      changeSlideHandler('prev');
    },3000)
  },[])
  return (
    <section className="section">
      <SectionTitle
      title ={'reviews'}  
      />
      <div className="section-center">
        <Slider
          activeSlide={activeSlide}
          data = {data}
        />
        <button className='prev' onClick={() => {
          changeSlideHandler('next');
        }}>
          <FiChevronLeft/>
        </button>
        <button className='next' onClick={() => {
          changeSlideHandler('prev');
        }}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  )
}

export default App;
