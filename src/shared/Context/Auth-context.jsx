import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userID: null,
  token:null,
  login:()=>{}
});



export  {AuthContext};