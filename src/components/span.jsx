import React from 'react';

export default function span(props) {
  return (
      <span className={props.class}>
          {props.content}
      </span>
  ) 
}