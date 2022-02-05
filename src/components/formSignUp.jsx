import React from 'react';
import Lable from './label';
import Input from './input';
import Button from './button';

export default function form() {
    return (
        <form>
            <Lable
                for="chk"
                ariaHidden="true"
                content='ثبت نام'></Lable>

            <Input
                type="text"
                name="txt"
                placeholder="نام کاربری"
                required="" />

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
