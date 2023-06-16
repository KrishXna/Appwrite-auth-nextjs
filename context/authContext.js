"use client"
import React, {createContext, useContext, useState} from "react";

export const userContext = createContext({userData: null, setUserData: () => {}});

const AuthContext = ({children}) => {
const [userData, setUserData] = useState(null);

return(
    <>
    <userContext.Provider value={{userData,setUserData}}>
        {children}
    </userContext.Provider>
    </>
)
}

export const useUserContext = () => {
    return useContext(userContext);
}

export default AuthContext;