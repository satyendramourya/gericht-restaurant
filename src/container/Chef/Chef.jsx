import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What we belive in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote_image" />
          <p className='p__opensans'>At our restaurant,</p>
        </div>
        <p className='p__opensans'>
          we believe in using only the freshest, highest-quality ingredients in every dish we create. We believe that food should not only taste great, but also be good for you. That&apos;s why we source our ingredients from local farmers and suppliers who share our commitment to sustainability and ethical farming practices. We also believe in constantly pushing the boundaries of flavor and technique to create unique and memorable dining experiences for our guests. Whether you&apos;re a foodie or simply looking for a great meal, we believe that our dedication to quality and creativity will shine through in every bite.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
