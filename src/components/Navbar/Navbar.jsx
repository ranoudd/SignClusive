import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/signclusive logo1.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}` }>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero'smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about'smooth={true} offset={-200} duration={500}>Application</Link></li>
            <li><Link to='qr-code-container'smooth={true} offset={-400} duration={500}>Qrcode</Link></li>
            <li><Link to='dataset-page'smooth={true} offset={-210} duration={500}>Dataset</Link></li>
            <li><Link to='team-item'smooth={true} offset={-180} duration={500}>OurTeam</Link></li>
            <li><Link to='contact'smooth={true} offset={-260} duration={500}className='btn' > Contact Us</Link></li>
            
        
          
        </ul>
        <img src={menu_icon} alt=' ' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar