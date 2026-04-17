import React, { useContext } from "react";
import { ContactFriendsContext } from "../../context/ContactFriendsContext";

const Timeline = () => {
  const { timeline } = useContext(ContactFriendsContext);

  console.log(timeline, "details");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4"> Timeline</h2>

      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Filter timeline" />
</label>
      {timeline.length === 0 ? (
        <p>No activity yet</p>
      ) : (
        <ul className="space-y-2">
          {timeline.map((item) => (
            <li key={item.id} className="p-2 bg-gray-100 rounded">
              {item.type.toUpperCase()} - {item.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Timeline;