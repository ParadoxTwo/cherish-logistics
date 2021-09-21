import React, { useEffect, useState } from 'react'
import './styles/contact.scss'

const Contact = () => {
    const [loading, setLoading] = useState('loading')
    useEffect(()=>{
        if(loading==='loading')
            setLoading('')
    },[loading])
    return (
        <div className="contact">
            <div className={`header ${loading}`}></div>
            <div className="content">
                <div className="text-container">
                    <p>
                        If you want to learn more about what we do or have any kind of enquiries for our services, <br/>
                        do no hesitate to contact us by email or telephone number.
                    </p>
                </div>
                <div className="details">
                    <h2><a className="link" href="mailto:info@cherishlogistics.com">info@cherishlogistics.com</a></h2>
                    
                    <h2><a className="link" href="tel:+917550056461">Call us at +91 7550056461</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Contact
