import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G_overlay" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
          Welcome to Gericht ! <br /> We&apos;re a family-owned restaurant that&apos;s been serving delicious meals since 2007. Our chefs use only the freshest ingredients to create classic dishes and unique twists on old favorites. We offer a warm and welcoming atmosphere, friendly service, and a menu that caters to all tastes and dietary needs. Come dine with us and experience the best that Gericht has to offer!
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
          Our restaurant has been serving delicious food and providing a warm atmosphere for over 20 years. It all started with a simple idea: to create a place where people could come together to enjoy great food and good company. Since then, we&apos;ve continued to grow and evolve, always striving to bring new and exciting dishes to our menu while staying true to our roots. Our commitment to quality and customer satisfaction has made us a favorite among locals and visitors alike. We invite you to join us and experience the rich history and flavors of our restaurant for yourself.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
