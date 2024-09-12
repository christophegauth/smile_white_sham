import React, { useEffect, useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
   },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Accueil</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>À propos</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Services</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        Contact 
      </button>

      <img 
        src={showMenu ? close : menu} 
        alt='Menu' 
        className='mobMenu' 
        onClick={() => setShowMenu(!showMenu)} 
      />
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Accueil</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>À propos</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Services</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar