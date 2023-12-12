import { Outfit } from 'next/font/google';
import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
const Outfi = Outfit({ subsets: ['latin'],weight:'600' })



function Header() {
  
  return (
    <header className='flex justify-between px-5 pt-5 pb-3'>
        <p className={`${Outfi.className} text-2xl `}>Rollin Again*</p>
        <ul className='flex space-x-5'>
        {MenuOptions.map((menu)=> (
            <li key={menu.id} className=''>{menu.name}</li>
        ))}
        </ul>
        <RiMenu3Fill className="w-8 h-8 "/>
    </header>
  )
}

export default Header

export type MenyTypes =  {name:string,id:number, path:string,Icon:string,} 

const MenuOptions:MenyTypes[] = [
    {name:"Our tours", path:"tours", Icon:"",id:1},
    {name:"About us", path:"About", Icon:"",id:2},
    {name:"Booking", path:"Booking", Icon:"",id:3},
    {name:"FAQ", path:"FAQ", Icon:"",id:4},

]


/*

    <header className='flex justify-between px-5 pt-5 pb-3'>
        <p className={`${Outfi.className} text-2xl`}>island*</p>
        <ul className='flex space-x-5'>
        {MenuOptions.map((menu)=> (
            <li key={menu.id} className=''>{menu.name}</li>
        ))}
        </ul>
        <RiMenu3Fill className="w-8 h-8 "/>
    </header>
*/