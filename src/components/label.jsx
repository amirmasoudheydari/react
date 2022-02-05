import React from 'react';

export default function label(props) {
  return (
    <label
    for={props.for}
    aria-hidden={props.ariaHidden}
    >{props.content}</label>
  )
}
