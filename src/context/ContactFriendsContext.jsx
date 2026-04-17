import React, { createContext, useState } from "react";

export const ContactFriendsContext = createContext();

const ContactFriendsProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (type, name) => {
    const newEvent = {
  id: Date.now(),
  type,
  name,
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};
   

    setTimeline((prev) => [...prev, newEvent]);
  };

  return (
    <ContactFriendsContext.Provider value={{ timeline, addToTimeline }}>
      {children}
    </ContactFriendsContext.Provider>
  );
};

export default ContactFriendsProvider;