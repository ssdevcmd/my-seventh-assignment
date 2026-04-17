import React from 'react';
import FriendCard from '../ui/FriendCard';
import { RiseLoader } from 'react-spinners';
import useFriend from '../../hooks/useFriend';


const Friends = () => {
    const {friends, loading} = useFriend();
    
    console.log(friends, 'list of friends');
    console.log(loading, 'loading data');

    return (
        <div className='container mx-auto my-[60px]'>
            <h2 className='font-bold text-4xl text-[#1f2937] mb-10'>Your Friends</h2>
           {loading ?
            (<div className='flex justify-center items-center'>
                <RiseLoader color='#244d3f' />
            </div>) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                friends.map((friend, index) => {
                    return <FriendCard key={index} friend={friend}></FriendCard>
                })
            }
            </div>)}
        </div>
    );
};

export default Friends;