import React, { useState } from 'react'
import logo from '../assets/img/Logo.svg'
import closeIcon from '../assets/img/close-icon.svg'
import ham_icon from '../assets/img/ham_icon.svg'

function Navbar({toggleIconClose, hamIcon, toggleIcon, setLogin, navBg, scrollDirection, userLogin, handleLogin}) {

  // const [display,setDisplay] = useState('')

  // const updateDisplay = () =>  {
  //   setDisplay(() => {
  //     display === '' ? "mobile" : ''
  //   })
  // }
  // const handleLogin = () => {
  //   if (userLogin === true){
  //     setUserLogin((prevState) => !prevState)
  //     // Add log out prompt to alert user that they're logged out
  //   }
  //   else{
  //     setLogin()
  //   }
  // }
  return (
    <nav>
      <div className={`${navBg} ${scrollDirection} navbar`}>
        <div>
            <img title='logo' alt='logo' className='navLogo' src={logo}/>
        </div>
        <div className='link-container'>
            <ul className='navlinks'>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#home">HOME</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#reservations">RESERVATIONS</a></li>
                <li><a href="#reservations">ORDER ONLINE</a></li>
                <li onClick={handleLogin} className={`navlogin ${userLogin === true && 'signout'} `}>
                  {userLogin === false ? 'LOGIN' : 'LOGOUT'}
                </li>
            </ul>
        </div>
        <div className='hamicon' onClick={toggleIcon}>
          <img src={hamIcon === 'hamburger'? ham_icon : closeIcon} alt='ham-icon' />
        </div>
      </div>
      { <div className={`mobile-nav ${hamIcon !== 'hamburger' ? 'decor' : ''}`}>
          {
            hamIcon !== 'hamburger' &&
            <div className='hamlink-container'>
              <ul className='hamlinks'>
                <li className='mobile' onClick={toggleIconClose}><a href="#about">ABOUT</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="#home">HOME</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="#menu">MENU</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="#reservations">RESERVATIONS</a></li>
                <li className='mobile' onClick={toggleIconClose}><a href="reservations">ORDER ONLINE</a></li>
                <li onClick={handleLogin} className={`mobile navlogin ${userLogin === true && 'signout'} `}>
                  <span onClick={toggleIconClose}>{userLogin === false ? 'LOGIN' : 'LOGOUT'}</span>
                </li>
              </ul>
              <a href='#home' className='mobile_logo' onClick={toggleIconClose}>
                <img alt='logo' width={"100"} src={logo}/>
              </a>
            </div>
          }
        </div>
      }
    </nav>
  )
}

export default Navbar