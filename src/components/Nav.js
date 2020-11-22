import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav = ({pathname}) => { 
    
    return(
        <div>
            <StyledNav>
               <h1><Link id='logo' to="/">Capture</Link></h1>
               <ul>
                   <li>
                     <Link to="/">1. About Us</Link>
                     <Line 
                     transition={{duration: 0.75}} 
                     initial={{width: "0%"}} 
                     animate={{width: pathname === '/' ? '50%' : '0%'}}/>
                   </li>
                   <li>
                     <Link to="/work">2. Our Work</Link>
                     <Line 
                     transition={{duration: 0.75}} 
                     initial={{width: "0%"}} 
                     animate={{width: pathname === '/work' ? '50%' : '0%'}}/>
                    </li>
                   <li>
                     <Link to="/contact">3. Contact Us</Link>
                     <Line 
                     transition={{duration: 0.75}} 
                     initial={{width: "0%"}} 
                     animate={{width: pathname === '/contact' ? '50%' : '0%'}}/>
                   </li>
               </ul>
            </StyledNav>
        </div>
    )
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  a{
      color: white;
      text-decoration: none;
  }

  ul{
      display: flex;
      list-style: none;
  }

  #logo{
      font-size: 1.6rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
  }

  li{
      padding-left: 10rem;
      position: relative;
  }
`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    position: absolute;
    bottom: -80%;
`

export default Nav;