import React from 'react';
import Lable from './label';
import Input from './input';
import Button from './button';

export default function formSigIn() {
  return (
    <form>
      <Lable
        content='ورود'
        for="chk"
        ariaHidden="true"
      />

      <Input
        type="email"
        name="email"
        placeholder="ایمیل"
        required="" />

      <Input
        type="password"
        name="pswd"
        placeholder="پسورد"
        required="" />

      <Button content='ثبت نام'></Button>
    </form>
  )
}
