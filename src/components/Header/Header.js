import React from 'react';
import { Link } from 'react-router';
import Button from '../Button/Button';
import './Header.css';

export default function Header() {
  return (
    <header>
        <div className='logo'>
        <img height="300px" width="300px" src="https://logodix.com/logo/303037.png" alt="logo" />
        </div>
        <nav>
            <ul>
                <Link to="/" className="link-no-underline"><li>Home</li></Link>
                <Link to="/review" className="link-no-underline"><li>Reviews</li></Link>
                <Link to="/cart" className="link-no-underline"><li>View Cart</li></Link>
                <Link to="/contactUs" className="link-no-underline"><li>Contact Us</li></Link>
            </ul>
        </nav>
        <div className='btns'>
           <Link to="/Login"><Button name="Sign Up" /></Link>
           <Link to="/Register"> <Button name="Login" /></Link>
        </div>
    </header>
  )
}
