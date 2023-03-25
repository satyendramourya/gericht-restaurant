import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = React.useState(false);
  return (
    <div className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a> </li>
        <li className='p__opensans'><a href="#about">About</a> </li>
        <li className='p__opensans'><a href="#menu">Menu</a> </li>
        <li className='p__opensans'><a href="#awards">Awards</a> </li>
        <li className='p__opensans'><a href="#contact">Contact</a> </li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'> Log In / Registration</a>
        <div />
        <a href="/" className='p__opensans'> Book Table </a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToogleMenu(true); }} />
        {
          toogleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-button'>
              <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => { setToogleMenu(false); }} />

              <ul className='app__navbar-smallscreen_link'>
                <li ><a href="#home" onClick={() => { setToogleMenu(false); }}>Home</a> </li>
                <li ><a href="#about" onClick={() => { setToogleMenu(false); }}>About</a> </li>
                <li ><a href="#menu" onClick={() => { setToogleMenu(false); }}>Menu</a> </li>
                <li ><a href="#awards" onClick={() => { setToogleMenu(false); }}>Awards</a> </li>
                <li ><a href="#contact" onClick={() => { setToogleMenu(false); }}>Contact</a> </li>

              </ul>
            </div>)
        }
      </div>
    </div>
  );
};

export default Navbar;
