import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
       <Link to={`/friends/${friend.id}`} className="card bg-base-100 shadow-sm">

  <figure>
    <img
      src={friend.picture}
      className="h-[150px] rounded-full"
      alt={friend.name}
    />
  </figure>

  <div className="card-body flex flex-col items-center text-center gap-2">

    <h2 className="card-title text-[#1f2937] font-bold text-2xl">{friend.name}</h2>

    <p className="text-sm text-[#64748b]">
      {friend.days_since_contact} days ago
    </p>
    <div className="flex flex-wrap gap-2">
     {friend.tags.map((tag, index) => (
        <span key={index} className="badge uppercase bg-[#cbfadb] text-[#244d3f] ">
          {tag}
        </span>
      ))}
      </div>

    <div className="flex flex-wrap gap-2">
     <span
  className={`badge text-white text-lg ${
    friend.status === "overdue"
      ? "badge-error"
      : friend.status === "on-track"
      ? "badge-success"
      : "badge-warning"
  }`}
   >
  {friend.status}
</span>
      

    </div>

  </div>
</Link>

    );
};

export default FriendCard;