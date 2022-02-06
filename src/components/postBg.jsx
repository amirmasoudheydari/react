import React from 'react';
import Span from './span';
import Img from './img'

export default function postBg(props) {
  return (
    <div class="postbg">
          <Span />
          <Img src={props.PostBg} />
    </div>
  )
}
