import React from 'react'
import {footerLinks, socialMedia} from '../constants'
import hamburger from '../assets/img/hamburger-img.png'

function Footer({toggleIconClose, handleLogin, userLogin}) {
  return (
    <section className="footer-section">
        <div className='footer-content' >
            <div className="footer-imgbx">
                    <img className='footer-img' src={hamburger} alt="logo" />
            </div>
            <div className="footerlink-container">
                {/* <div className="footer-imgbx">
                    <img className='footer-img' src={hamburger} alt="logo" />
                </div> */}
                {
                    footerLinks.map((content, index) => {
                    return(
                        <div key={content.title} className={`footerlink-bx ${index !== footerLinks.length - 1 ? 'lg' : ''}`}>
                        <p className="footlink-head">
                            {content.title}
                        </p>
                        <div className='footlink-body'>
                            {
                            content.links.map((item, index) => {
                                return(
                                    item.name === 'Login' ?
                                    <p key={item.name} onClick={handleLogin}
                                    className={`footlink-text login ${userLogin === true && 'logout'}`}>
                                        <span onClick={toggleIconClose}>{`${userLogin === false ? 'Login' : 'Logout'}`}</span>
                                    </p>
                                    :
                                    <a key={item.name} href={item.link} target="" onClick={toggleIconClose}>
                                        <p className={`footlink-text`}>{item.name}</p>
                                    </a>
                                )
                            })
                            }
                        </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
        <div className='ft-bottom'>
            <div className='ft-line'></div>
            <p className='ftb-text'>Copyright ©️ 2024 Little Lemon</p>
            <p className='ftb-text'>Created by Saviour Akalia</p>
            {
                socialMedia.map((socials, index) => {
                    return(
                      <a href={socials.link} key={socials.id} target="_blank"
                      className={`${index != socialMedia.length - 1 ? "social-margin" : ""}`} >
                        <img width={24} className="w-[24px]" src={socials.icon}  />
                      </a>
                    )
                  })
            }
        </div>
    </section>
  )
}

export default Footer