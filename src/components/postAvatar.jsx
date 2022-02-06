import React from 'react';
import Img from './img'
import Span from './span'

export default function postAvatar(props) {
    return (
        <div class="postAvatar">
            <Img src={props.PostAvatar} />
            <Span content={props.UserName} />
        </div>
    )
}
