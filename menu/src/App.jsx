import { useState, useEffect } from 'react'
import './App.css'
import data from "./data"
import Categories from "./Categories"
import Menu from "./Menu"

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

export default function App(){
  const[menuItems, setMenuItems] = useState(() => data)
  const[categories, setCategories] = useState(() => [])


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return;
    }

    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return(
    <main>
      <section className='menu-section'>
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}


