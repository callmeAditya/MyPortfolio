import React, { useState } from 'react';
import './navbar.scss'
import { getImageUrl } from '../utils';
// import MenuIcon as '../../assets/nav/menuIcon.png'

const Navbar = ()=>{
const [open,setOpen] = useState(false);
// console.log(getImageUrl('nav/menuIcon.png')});
const handleopen=()=>{
    setOpen(!open);
}

const links = [
  {
    href:"#about",
    text: "About"
  },
  {
    href:"#experience",
    text: "Experience"
  },
  {
    href:"#projects",
    text: "Projects"
  },
  {
    href:"#contact",
    text: "Contact"
  }
]

    return(
        <>
        <nav className='navbar'>
          <a className='title' href='/'>Portfolio</a>  
          <div className='menu'>
            <img onClick={handleopen} className='menu_btn' src={ !open? "../../assets/nav/menuIcon.png"  : "../../assets/nav/closeIcon.png" } />
            <ul className={`menu_items ${open && 'menuOpen'}`}>
               {links.map((item,key)=>  <li id={key}><a onClick={()=>setTimeout(()=>{setOpen(false)},500)  } href={item?.href}>{item.text}</a></li>)}
                
            </ul>
          </div>
        </nav>
        </>
    )
};

export default Navbar;