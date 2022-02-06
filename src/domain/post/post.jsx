import React from 'react';
import PostDate from '../../components/postDate'
import PostTitle from '../../components/postTitle'
import PostAvatar from '../../components/postAvatar'
import PostBg from '../../components/postBg'

export default function posts(props) {
  return (
    <>
      <PostDate  postDate={props.PostDate} />
      <PostTitle PostTitle={props.PostTitle} />
      <PostAvatar  PostAvatar={props.postAvatar} UserName={props.UserName} />
      <PostBg PostBg={props.PostBg} />
    </>
  )
}
