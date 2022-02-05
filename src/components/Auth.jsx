import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Input from './input';

export default function Auth() {
  return (
    <div class="main">

      <Input 
      type="checkbox" 
      id="chk" 
      ariaHidden="true" />

      <SignUp />
      
      <Login />

    </div>
  )

}
