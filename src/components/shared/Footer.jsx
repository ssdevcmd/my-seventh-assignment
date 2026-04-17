import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className='bg-[#244D3F] text-white px-4 sm:px-8 lg:px-12 py-15 items-center'>
           <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10 pb-10">

       {/* Heading */}
     <div className="max-w-sm">
     <h3 className="text-5xl font-bold">
      Keen<span className="font-medium">Keeper</span>
     </h3>
     <p className="text-sm mt-2">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
     </p>
    </div>

     {/* Social Links */}
    <div>
    <h2 className="font-bold text-lg  mb-2">Social Links</h2>
     <div className="flex justify-center gap-3">
      <SlSocialInstagram size={30} />
      <FaFacebook size={30} />
      <FaXTwitter size={30} />
     </div>
    </div>

   </div>

                <hr className='border-dashed pt-2' />
                    <div className='flex justify-between text-[#fafafa]'>
                    <span>© 2026 Digitools. All rights reserved.</span>
                    <span>Privacy Policy       Terms of Service Cookies</span>
                    </div>      
                
            </div>
        </div>
    );
};

export default Footer;