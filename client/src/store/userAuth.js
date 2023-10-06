import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthen,setIsAuthen]=useState(false);
    const [user,setUser]=useState(null);
    const [person,setPerson]=useState("")

    const signupDonor = async(data)=>{
        console.log(data)
        await axios.post("http://localhost:8080/auth/donorSignUp",{...data})
                    .then((response)=>{
                        console.log(response)
                        setIsAuthen(response.data.success);
                        setUser(response.data.token)
                        setPerson("donor")
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
    }

    const loginDonor = async(data)=>{
        console.log(data)
        await axios.post("http://localhost:8080/auth/donorLogin",{...data})
                    .then((response)=>{
                        console.log(response)
                        setIsAuthen(response.data.success);
                        setUser(response.data.token)
                        setPerson("donor")
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
    }

    const signupAgent = async(data)=>{
        console.log(data)
        await axios.post("http://localhost:8080/auth/agentSignUp",{...data})
                    .then((response)=>{
                        setIsAuthen(response.data.success);
                        setUser(response.data.token)
                        setPerson("agent")
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
    }

    const loginAgent = async(data)=>{
        console.log(data)
        await axios.post("http://localhost:8080/auth/agentLogin",{...data})
                    .then((response)=>{
                        console.log(response)
                        setIsAuthen(response.data.success);
                        setUser(response.data.token)
                        setPerson("agent")
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
    }

    return (
        <authContext.Provider value={{ isAuthen, user, signupDonor,loginDonor,signupAgent,loginAgent,person }}>
          {children}
        </authContext.Provider>
      );
}

function useUserAuth() {
    return useContext(authContext);
}
export { AuthProvider, authContext ,useUserAuth};