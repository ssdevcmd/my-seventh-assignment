import React, { useContext, useState } from "react";
import { ContactFriendsContext } from "../../context/ContactFriendsContext";
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const Timeline = () => {
  const { timeline, setSortingType } = useContext(ContactFriendsContext);
 
  return (
    <div className="min-h-[70vh]">
      <h2 className="text-xl font-bold mb-4 mt-5">Timeline</h2>

      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter Timeline ⬇️
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
        >
          <li><a onClick={() => setSortingType('call')}>Call</a></li>
          <li><a onClick={() => setSortingType('text')}>Text</a></li>
          <li><a onClick={() => setSortingType('video')}>Video</a></li>
        </ul>
      </div>

      {timeline.length === 0 ? (
        <p className="font-bold text-4xl text-center mt-10">
          No activity yet
        </p>
      ) : (
        <div className="space-y-3 mt-5">
          {timeline.map((item) => (
            <div key={item.id} className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="font-semibold">{item.name}</p>
              <span className="text-xl flex items-center gap-2">
         {item.type === "call" ? (
          <>
           <img src={callImg} alt="" className="w-[20px]"/>
           Call
          </>
          ) : item.type === "text" ? (
          <>
          <img src={textImg} alt="" className="w-[20px]"/>
        Text
          </>
         ) : item.type === "video" ? (
          <>
        <img src={videoImg} alt="" className="w-[20px]"/> Video
        </>
        ) : (
         ""
        )}
       </span>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;