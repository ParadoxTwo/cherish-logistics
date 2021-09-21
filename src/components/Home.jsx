import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/home.scss'

const Home = () => {
    const [loading, setLoading] = useState('loading')
    useEffect(()=>{
        if(loading==='loading')
            setLoading('')
    },[loading])
    return (
        <div className="home">
            <div className={`header ${loading}`}>

            </div>
            <div className="content-container">
                <div className="headings">
                    <h1>Welcome to Cherish Logistics</h1>
                    <h1><Link className="button" to='/contact'>Contact Us</Link> to Get Started</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
