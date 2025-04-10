import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar=({toggle})=> {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
      if(window.scrollY >= 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, [])
  
    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}></IconContext.Provider>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>여행가자2</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                  <NavItem>
              <NavLinks to='about'
              smooth={true} 
              duration={500} 
              spy={true} exact='true' 
              offset={-80}
              >About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >회원등록
              </NavLinks>
            </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin">로그인</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar
