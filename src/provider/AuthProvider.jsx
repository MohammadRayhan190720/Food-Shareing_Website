import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //googleProvider
  const googleProvider = new GoogleAuthProvider();

  //signinwithemailandpassword

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //const singInUser

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signInwithGoogle

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //update profile

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  //handlsignout

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    creatNewUser,
    singInUser,
    signInWithGoogle,
    handleSignOut,
    updateUserProfile,
  };

  //create a observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //for jwt token

      if(currentUser?.email){
        const user = {email: currentUser.email}


        axios.post("http://localhost:5000/jwt",user,{
          withCredentials:true,
        })
        .then(res => {
          console.log("inside jwt",res.data)
           setLoading(false);
        })
      }else{
        axios.post("http://localhost:5000/logout",{},{
          withCredentials:true,
        })
        .then(res =>{
          console.log(res.data)
          setLoading(false)
        })
      }


     
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
