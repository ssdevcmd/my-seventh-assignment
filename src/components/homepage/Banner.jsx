import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col justify-between items-center container mx-auto my-10 gap-5'>
                <h2 className='font-bold text-5xl text-[#1f2937]'>Friends to keep close in your life</h2>
                <p className='text-[#64748b] text-md opacity-80]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> <span className='block text-center'> relationships that matter most.</span>
                </p>
                <button className='btn bg-[#244d3f] text-white'>+Add a Friend</button>
            </div>
           
        </div>
    );
};

export default Banner;