import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { CircularProgress } from "@mui/material";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(user);
    });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <AuthContext.Provider value={ currentUser }>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
