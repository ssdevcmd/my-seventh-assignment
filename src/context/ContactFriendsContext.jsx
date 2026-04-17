import React, { createContext } from 'react';

const ContactFriendsContext = createContext();

const ContactFriendsProvider = () => {
    

    const data = {
        name: 'Sani',
        age: 28
    }
    return <ContactFriendsContext.Provider value={data}></ContactFriendsContext.Provider>
};

export default ContactFriendsProvider;