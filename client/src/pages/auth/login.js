import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../../../utils/firebase"

const login = () => {
  //Sign in with google auth
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth);
    } catch (error) {}
  };

  return (
    <div className="shadow-xl mx-10 mt-32 p-10 text-gray-700">
      <h2 className="text-2xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in in with one of the providers</h3>
        <button className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default login;
