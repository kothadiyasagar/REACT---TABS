import { type } from "@testing-library/user-event/dist/type"
import React from 'react'

  type Element = {button:String; title:String}
 type  Tabs = {
     data:Element[];
 }

export const Tabb =({data}:Tabs)=>{
     console.log(data)

}