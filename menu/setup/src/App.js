import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu,{uniqueCatagories} from './data';

function App() {
  const [items, setItems] = useState(menu);
  const [active, setActive] = useState('all');
  const chosingCatagoryHandler = (category) => {
    if (category === 'all') {
      setItems(menu);
      setActive(category);
      return;
    }
    const updateditems = menu.filter(item => item.category === category);
    setItems(updateditems);
    setActive(category);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          active={active}
          categories={uniqueCatagories}
          chossingMenu = {chosingCatagoryHandler}
        />
        <Menu
          items= {items}
        />
      </section>
      </main>
  )
}

export default App;
