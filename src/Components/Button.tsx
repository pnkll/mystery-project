import React from 'react';
import s from './Button.module.scss'

export default function Button(){
   return(
       <>
        <button className={s.primary}>Click me</button>
       </>
   )
}