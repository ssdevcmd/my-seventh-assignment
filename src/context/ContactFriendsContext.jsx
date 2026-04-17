import React, { createContext, useState } from "react";

export const ContactFriendsContext = createContext();

const ContactFriendsProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (type, name) => {
    const newEvent = {
  type,
  name,
   date: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
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