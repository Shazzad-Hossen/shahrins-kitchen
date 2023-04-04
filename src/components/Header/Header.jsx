import React from 'react';
import { Link } from 'react-router-dom';
import hCss from '../Header/Header.module.css'

const Header = () => {
    return (
        <div className=" flex justify-between items-center p-4 shadow-2xl">
            <Link to='/'>
            <h1 className='font-bold text-[#333333] text-3xl'>SHAHRIN'S<span className='text-[#ff660e]'> KITCHEN</span></h1></Link> <ul className='flex gap-4 items-center font-semibold text-xl'>
                <li className={hCss.links}><Link to='/'>Home</Link></li>
                <li className={hCss.links}><Link to='contact'>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;