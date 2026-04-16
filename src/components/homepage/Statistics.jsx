import React from 'react';

const Statistics = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-3 container mx-auto px-4'>
             <div>
                <h4 className='font-semibold text-[#244D3F] text-2xl text-center'>10</h4>
                <p className='text-[#64748b] opacity-80'>Total Friends</p>
            </div>
             <div>
                <h4 className='font-semibold text-[#244D3F] text-2xl text-center'>3</h4>
                <p className='text-[#64748b] opacity-80'>On Track</p>
            </div>
             <div>
                <h4 className='font-semibold text-[#244D3F] text-2xl text-center'>6</h4>
                <p className='text-[#64748b] opacity-80'>Need Attention</p>
            </div>
             <div>
                <h4 className='font-semibold text-[#244D3F] text-2xl text-center'>12</h4>
                <p className='text-[#64748b] opacity-80'>Interactions This Month</p>
            </div>
            
           </div>
        </div>
    );
};

export default Statistics;