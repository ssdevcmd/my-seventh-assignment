import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({ to, children }) => {
    return (
       <NavLink 
       to={to}
       className={({ isActive }) => 
      `flex items-center gap-1 px-2 py-1 ${isActive ? "text-white border border-[#244d3f] bg-[#244d3f] rounded-md" : ""}`
            }>
        {children}
       </NavLink>
    );
};

export default MyNavLink;