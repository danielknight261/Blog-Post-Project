import React from "react";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // Check if user is logged in
  const getData = async () => {
    if (loading) return; // Wait for authentication to finish
    if (!user) return route.push("/auth/login"); // If user is not logged in, redirect to login page
  };

  // Get user data on component mount or when user authentication state changes
  useEffect(() => {
    getData();
  },[user, loading]);

  return (
    <div>
      <h1>Your Posts</h1>
      <div>posts</div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}
