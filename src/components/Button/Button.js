import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <div>
        <button className='props-btn'>{props.name}</button>
    </div>
  )
}
