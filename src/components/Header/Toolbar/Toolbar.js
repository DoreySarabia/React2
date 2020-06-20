import React from 'react';
import logo from '../../../images/logo.png'
import search from '../../../images/search.png'
import cart1 from '../../../images/cart1.png';
import foco from '../../../images/foco.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><i><img src={logo} /></i></a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">BUSCAR <i><img src={search} /></i></a></li>
                <li><a href="/"> CARRITO  <i><img src={cart1} /></i></a></li>
                <li><a href="/">PRODUCTOS  <i><img src={foco} /></i></a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
