import React from 'react';
import Span from './span'

export default function postDate(props) {
  return (
    <div class="postDate">
      <Span content={props.postDate} />
    </div>
  )
}
