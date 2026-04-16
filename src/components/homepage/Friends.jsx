import React, { use, useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';

// const friendsPromise = fetch('/data.json').then((res) => res.json());

const Friends = () => {
    // const friends = use(friendsPromise);
    // console.log(friends, 'friends data');
    const [friends, setFriends] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            console.log(data);
            setFriends(data);
        };
        fetchData();
    }, []);

    console.log(friends, 'list of friends');

    return (
        <div className='container mx-auto my-[60px]'>
            <h2 className='font-bold text-4xl text-[#1f2937] mb-10'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                friends.map((friend, index) => {
                    return <FriendCard key={index} friend={friend}></FriendCard>
                })
            }
            </div>
        </div>
    );
};

export default Friends;