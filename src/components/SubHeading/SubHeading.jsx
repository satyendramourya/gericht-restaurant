import React from 'react';
import images from '../../constants/images';

/* eslint-disable react/prop-types */
const SubHeading = (props) => (
  <div style={{ marginBottom: '1rem ' }}>
    <p className='p__cormorant' >
      {props.title}
    </p>
    <img src={images.spoon} alt="spoon__img" />
  </div>
);

export default SubHeading;
