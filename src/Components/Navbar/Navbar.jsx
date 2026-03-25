import React, { useState } from 'react'
import Dollar1 from '../../assets/Dollar.png'
import Logo from '../../assets/logo.png'
import { Menu, X } from 'lucide-react'



const Navbar = ({coin}) => {

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  }


  return (
    <div className={`navbar bg-base-100 shadow-sm flex md:justify-between w-11/12 mx-auto mt-10 ${open && 'mb-44'} duration-1000`}>

 <div className="flex gap-11 md:hidden">

  {
    open ?  <X onClick={handleMenu}></X> : <Menu onClick={handleMenu}></Menu> 
  }

{
  <ul className={`absolute duration-1000 ${open ? 'top-24' : '-top-52'} `}>
        <li className='text-[#131313B2] font-bold'><a href='/'>Home</a></li>
        <li className='text-[#131313B2] font-bold'><a href='/future'>Future</a></li>
        <li className='text-[#131313B2] font-bold'><a href='/teams'>Teams</a></li>
        <li className='text-[#131313B2] font-bold'><a href='/schedules'>Schedules</a></li>
        <button className="flex justify-between items-center gap-2 font-semibold"> {coin} coins <img src={Dollar1} /> </button> 
        </ul>
    }
        
  </div>

  <div>
    <img src={Logo} />
  </div>
  
  <div className="md:flex gap-11 hidden">
    <ul className='flex gap-12'>
        <li className='text-[#131313B2]'><a href='/'>Home</a></li>
        <li className='text-[#131313B2]'><a href='/future'>Future</a></li>
        <li className='text-[#131313B2]'><a href='/teams'>Teams</a></li>
        <li className='text-[#131313B2]'><a href='/teams'>Teams</a></li>
        <li className='text-[#131313B2]'><a href='/schedules'>Schedules</a></li>
    </ul>
    <button className="flex justify-between items-center gap-2 font-semibold"> {coin} coins <img src={Dollar1} /> </button>
  </div>
</div>
  )
}

export default Navbar
