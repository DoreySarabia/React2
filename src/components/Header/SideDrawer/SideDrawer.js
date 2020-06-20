import React from 'react';
import './SideDrawer.css';


import cart1 from '../../../images/cart1.png';
import foco from '../../../images/foco.png';
import search from '../../../images/search.png';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">BUSCAR <i><img src={search} /></i></a>
        </li>
        <li>
        <a href="/">CARRITO <i><img src={cart1} /></i></a>
        </li>
        <li>
        <a href="/"> PRODUCTOS<i><img src={foco} /></i></a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
