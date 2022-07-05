import React from 'react'
import '../css/navBar.css'

export default function NavBar() {
  return (
    <div id='nav-bar-body'>
        
        {/* left box */}
        <div className='left-box'>
            <img src='../images/Star Logo 07-3.png' alt='level works LOGO' className='left-box-img'/>
        </div>

        {/* right box */}
        <div className='right-box'>
            <div className='right-box-left'>
                
                {/* <div id='right-box-link-one'>
                    <a href=' '><img src='../images/CTA Button0.svg' alt='' className='right-box-link-one-link'/></a>
                </div> */}
                <div id='right-box-link-one'>
                    <a href=' '><img src='../images/CTA Button1.svg' alt='' className='right-box-link-one-link'/></a>
                </div>
                <div id='right-box-link-one'>
                    <a href=' '><img src='../images/CTA Button2.svg' alt='' className='right-box-link-one-link'/></a>
                </div>

            </div>

            <div className='right-box-right'>
                
                <div>
                    <img src='../images/NZ Flag@2x.png' alt='' className='flag-img' />
                </div>

                <div>
                    <img src='../images/Maori flag@2x.png' alt='' className='flag-img' />
                </div>

            </div>
        </div>

    </div>
  )
}
