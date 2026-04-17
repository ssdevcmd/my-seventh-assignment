import React, { useContext } from 'react';
import { Link, useParams } from 'react-router';
import useFriend from '../../hooks/useFriend';
import { RiseLoader } from 'react-spinners';
import { MdNotificationsPaused } from 'react-icons/md';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { LuPhoneCall } from 'react-icons/lu';
import { IoVideocamOutline } from 'react-icons/io5';
import { BsChatLeftText } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { ContactFriendsContext } from '../../context/ContactFriendsContext';

const FriendDetails = () => {
    const { id } = useParams();
    console.log(id, 'id no');
    const { friends, loading } = useFriend();

    console.log(friends, 'friend', loading , 'loading');

    const expectedFriend = friends.find((friend) => String(friend.id) === id);
    console.log(expectedFriend, 'expected friend');
    5
  const { addToTimeline, timeline } = useContext(ContactFriendsContext);


     if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <RiseLoader color='#244d3f' />
      </div>
    );
  }

    return (
       <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6">

  {/* Profile */}
  <div className="flex flex-col items-center text-center gap-3">
    <img
      src={expectedFriend.picture}
      alt={expectedFriend.name}
      className="w-24 h-24 rounded-full object-cover"
    />

    <h2 className="text-2xl font-bold">
      {expectedFriend.name}
    </h2>

    {/* Status */}
    <span
      className={`badge text-white ${
        expectedFriend.status === "overdue"
          ? "badge-error"
          : expectedFriend.status === "on-track"
          ? "badge-success"
          : "badge-warning"
      }`}
    >
      {expectedFriend.status}
    </span>

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-2">
      {expectedFriend.tags.map((tag, index) => (
        <span
          key={index}
          className="badge uppercase bg-[#cbfadb] text-[#244d3f]"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Bio */}
    <p className="text-[#64748b] text-sm max-w-md">
      {expectedFriend.bio}
    </p>
    {/* Email */}
    <p className="text-[#64748b] text-sm max-w-md">{expectedFriend.email}</p>
  </div>

  {/* Stats */}
  <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

      <div>
        <h4 className="text-2xl font-semibold text-[#244D3F]">
          {expectedFriend.days_since_contact}
        </h4>
        <p className="text-sm text-gray-500">Days Since Contact</p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-[#244D3F]">
          {expectedFriend.goal}
        </h4>
        <p className="text-sm text-gray-500">Goal (Days)</p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-[#244D3F]">
          {expectedFriend.next_due_date}
        </h4>
        <p className="text-sm text-gray-500">Next Due</p>
      </div>

    </div>
  </div>

  {/* Relationship Goal */}
  <div className="mt-6 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">

    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-[#244D3F]">
          Relationship Goal
        </h3>
        <p className="text-sm text-gray-500">
          Connect every {expectedFriend.goal} days
        </p>
      </div>

      <button className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100 transition">
        Edit
      </button>
    </div>

  </div>

  {/* Quick Check-In */}
  <div className="mt-6 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">

    <h3 className="font-semibold text-[#244D3F] mb-4">
      Quick Check-In
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

      <Link to={'/timeline'}
       onClick={() => {
    addToTimeline("call");
    toast.success(`Call with ${expectedFriend.name}`);
  }} 
       className="btn flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50">
        <span className="text-sm"><LuPhoneCall /> Call</span>
      </Link>

      <Link to={'/timeline'}
            onClick={() => {
    addToTimeline("text");
    toast.success(`Text with ${expectedFriend.name}`);
  }} 
      className="btn flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50">
        <span className="text-sm"><BsChatLeftText />Text</span>
      </Link>

      <Link to={'/timeline'}
           onClick={() => {
    addToTimeline("video");
    toast.success(`Video with ${expectedFriend.name}`);
  }} 
      className="btn flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50">
        <span className="text-sm"><IoVideocamOutline />Video</span>
      </Link>

    </div>

  </div>

</div>
    );
};

export default FriendDetails;