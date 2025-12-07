import React from "react";
import AuthContext from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Create new user with email
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateCurrentUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //   Create existing
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // delete user

  const deleteCurrentUser = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };

  const userInfo = {
    registerUser,
    loginUser,
    updateProfile,
    loading,
    setLoading,
    githubLogin,
    currentUser,
    logOutUser,
    deleteCurrentUser,
    updateCurrentUser,
    setCurrentUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
