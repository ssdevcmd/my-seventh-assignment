import React, { createContext, useState } from "react";

export const ContactFriendsContext = createContext();

const ContactFriendsProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const [sortingType, setSortingType] = useState('');

  const addToTimeline = (type , name) => {
    const newEvent = {
   id: Date.now(),
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
    <ContactFriendsContext.Provider value={{ timeline, addToTimeline, sortingType, setSortingType }}>
      {children}
    </ContactFriendsContext.Provider>
  );
};

export default ContactFriendsProvider;