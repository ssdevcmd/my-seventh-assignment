import React from 'react';
import logo from '../../assets/logo.png';
import MyNavLink from './MyNavLink';
import { RiHome2Line } from 'react-icons/ri';
import { CiClock2 } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';
const Navbar = () => {
    return (
        <nav className='shadow'>
           <div className='flex flex-col md:flex-row justify-between py-[8px] container mx-auto items-center gap-4'>
             <img src={logo} alt="" className='w-[150px] md:w-[180px]' />
            <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-6 font-medium list-none">
                <li>
                  <MyNavLink to={'/'}><RiHome2Line /> Home</MyNavLink>  
                </li>
                <li>
                   <MyNavLink to={'/timeline'}><CiClock2 /> Timeline</MyNavLink> 
                </li>
                <li>
                   <MyNavLink to={'/stats'}><TfiStatsUp /> Stats</MyNavLink> 
                </li>
            </ul>
           </div>
        </nav>
    );
};

export default Navbar;