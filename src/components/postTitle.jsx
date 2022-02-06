import React from 'react';
import H2 from './h2'

export default function postTitle(props) {
  return (
    <div class="postTitle">
      <H2 content={props.PostTitle} />
    </div>
  )
}
