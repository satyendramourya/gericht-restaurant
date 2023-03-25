import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [subscribeState, setSubscribeState] = useState(false);

  const handleSubscribe = () => {
    if (subscribeState) {
      setSubscribeState(false);
    } else {
      setSubscribeState(true);
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" required />
        <button type="submit" className="custom__button" onClick={handleSubscribe} >{subscribeState ? 'Subscribed' : 'Subscribe'}</button>
      </div>
    </div>
  );
};

export default Newsletter;
