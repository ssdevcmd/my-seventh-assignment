import React, { createContext, useState } from "react";

export const ContactFriendsContext = createContext();

const ContactFriendsProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (type) => {
    const newEvent = {
      id: Date.now(),
      type ,
      time: new Date().toLocaleTimeString(),
    };

    setTimeline((prev) => [newEvent, ...prev]);
  };

  const data = {
    timeline,
    addToTimeline,
  };

  return (
    <ContactFriendsContext.Provider value={data}>
      {children}
    </ContactFriendsContext.Provider>
  );
};

export default ContactFriendsProvider;