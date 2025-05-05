import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const Googleprovider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, Googleprovider);
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User: ", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loginUser,
    registerUser,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
