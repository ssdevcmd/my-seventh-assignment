import React from 'react';

const FriendCard = ({friend}) => {
    return (
       <div className="card bg-base-100 shadow-sm">

  <figure>
    <img
      src={friend.picture}
      className="h-[150px] rounded-full"
      alt={friend.name}
    />
  </figure>

  <div className="card-body flex flex-col items-center text-center gap-2">

    <h2 className="card-title">{friend.name}</h2>

    <p className="text-sm text-gray-500">
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
      : "badge-warning"
     }`}
     >
     {friend.status}
    </span>
      

    </div>

  </div>
</div>

    );
};

export default FriendCard;