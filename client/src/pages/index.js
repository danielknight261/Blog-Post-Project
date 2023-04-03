import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import Message from "../../components/message";
import { db } from "../../utils/firebase";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  //Create a state with all the posts
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-12 text-lg font-medium">
        <h2 className="2-xl">See what everyone else if posting</h2>
        <Message />
        <Message />
      </div>
    </div>
  );
}
