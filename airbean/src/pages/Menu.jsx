import header from '/assets/graphics-header.svg'
import footer from '/assets/graphics-footer.svg'

import Menus from '../components/Menus';
import Cart from '../components/Cart';
import HamburgerMenu from '../components/HamburgerMenu'
import './Menu.css'
import { useState, useEffect } from 'react';



function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans/');
      const data = await response.json();
      console.log(data);
      setMenu(data.menu);
    }

    getMenu();
  }, []);

  const menuComponents = menu.map((menus) => {
    return (
      <Menus
        title={menus.title}
        brand={menus.brand}
        price={menus.price}
        key={menus.id}
      />
    );
  });

 
  
     return (
       <section>
        <HamburgerMenu />
        <Cart />
         <img src={header} alt="headerbild" />
         <h1>Meny</h1>
         <section className='products'>{menuComponents}</section>
         <img src={footer} alt="footerbild" />
       </section>
     );
   }
  
    export default Menu;