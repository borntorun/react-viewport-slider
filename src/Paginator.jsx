'use strict';

import React from 'react';
import PropTypes from 'prop-types'

import Bullet from './Bullet';

const Paginator = (props) => {

  const style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  }
  
  const aBullets = [];
  for(let i=0; i<props.bullets; i+=1) {
    aBullets.push(i);
  }
  return (
    <div className="viewport-slider-paginator" style={style}>
      {aBullets.map((i) => {
        return (
          <Bullet active={i === props.activeIndex}
            key={i}
            index={i}
            onClick={props.onClick} />
        );
      })}
    </div>
  );

};

Paginator.propTypes = {
  activeIndex: PropTypes.number,
  bullets: PropTypes.number.isRequired,
  onClick: PropTypes.func
};


export default Paginator;
