import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Fine dining is a style of cuisine that uses techniques and ingredients,
        such as fine wines and cheeses, to create a unique and
        memorable dining experience.
      </p>
      <button className='custom__button' type='button'>Explor Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
