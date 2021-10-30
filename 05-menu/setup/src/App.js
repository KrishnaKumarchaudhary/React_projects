import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['All',...new Set(items.map((e)=>e.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setcatagories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };



  return <>
   <main>
   <section className='menu-section'>
   <div className='title'>
   <h2>Our Menu Items</h2>
   <div className="underline"></div>
   </div>
   <Categories categories={categories} filterItems={filterItems}/>
   <Menu items={menuItems}/>
    </section>
  </main>
  </>
}

export default App;
