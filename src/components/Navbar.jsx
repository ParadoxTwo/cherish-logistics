import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { paths } from './variables'
import './styles/navbar.scss'

const Navbar = () => {
    const [visible, setVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
    const [cls, setCls] = useState("")
    const handleScroll = () => {
        
        const currentScrollPos = window.pageYOffset;
        const vis = prevScrollPos > currentScrollPos;
        setPrevScrollPos(currentScrollPos);
        setVisible(vis)
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
    useEffect(()=>{
        if(visible){
            setCls("")
        }
        else{
            setCls("navbar--hidden")
        }
    }, [visible])
    return (
        <div className={"navbar "+cls}>
            <Link className='logo' to={paths[0][1]}>
                <img alt="logo" src='/favicon.ico'/>
                Cherish Logistics
            </Link>
            <ul>
                <li><NavLink activeClassName='active' exact to='/'>HOME</NavLink></li>
                <li><NavLink activeClassName='active' to='/contact'>CONTACT US</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
