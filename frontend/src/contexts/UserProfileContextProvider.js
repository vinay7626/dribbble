import React, {useState} from "react";
import UserProfileContext from "./UserProfileContext";

const UserProfileContextProvider = ({children}) => {
    const [userProfile,setUserProfile] = useState({
        fname:"",
        userName:"",
        email:"",
        password:"",
        terms:true,
        image:"",
        location:"",
        artist:false,
        designer:false,
        employer:false,
    });
    return (
        <UserProfileContext.Provider value={{userProfile,setUserProfile}}>
            {children}
        </UserProfileContext.Provider>
    )
}

export default UserProfileContextProvider