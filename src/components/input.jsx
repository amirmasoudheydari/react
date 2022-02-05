import React from 'react';

export default function input(props) {
  return (
      <input 
      type={props.type}
      id={props.id}
      aria-hidden={props.ariaHidden}
      name={props.name}
      placeholder={props.placeholder}
         />
  )
}
