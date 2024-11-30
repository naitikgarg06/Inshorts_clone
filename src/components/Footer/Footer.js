import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <span className='name'>
                Inshorts Clone made by - Naitik Garg
            </span>
            <hr style={{ width: "90%" }} />
            <div className='iconContainer'>
                <a href='linkedin.com/in/naitik-garg-4356a9129' target=''>
                    <i class="fa-brands fa-linkedin fa-lg fa-2xl"></i></a>
                <a href='linkedin.com/in/naitik-garg-4356a9129'>
                    <i class="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
        </div>
    )
}

export default Footer
