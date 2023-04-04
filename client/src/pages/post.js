import { auth, db } from "../../utils/firebase"; //importing firebase authentication and firestore database
import { useAuthState } from "react-firebase-hooks/auth"; //importing react-firebase-hooks auth to use authentication state
import { useRouter } from "next/router"; //importing next.js router to handle client-side routing
import { useEffect, useState } from "react"; //importing react hooks for side effects and state management
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore"; //importing functions from firestore to add documents, get collections, and server timestamp
import { toast } from "react-toastify"; //importing react-toastify library to display toast messages


export default function Post() { //defining the Post component

  //Form State
  const [post, setPost] = useState({ description: "" }); //state for the post and its description
  const [user, loading] = useAuthState(auth); //getting the current user and loading state from firebase authentication
  const route = useRouter(); //getting the current router instance
  const routeData = route.query; //getting the query parameters from the router


  //submit post
  const submitPost = async (e) => { //function to submit a post
    e.preventDefault(); //prevent default form submission behavior

    //run checks for description
    if(!post.description){ //if the description is empty
        toast.error('Description Field Empty', { //display an error toast message
            position: toast.POSITION.TOP_CENTER,
            autoClose:1500,
        })
        return;
    }
    if (post.description.length > 300) { //if the description is too long
        toast.error("Description too long", { //display an error toast message
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        return;
      }

      if (post?.hasOwnProperty("id")) {
        const docRef = doc(db, "posts", post.id);
        const updatedPost = { ...post, timestamp: serverTimestamp() };
        await updateDoc(docRef, updatedPost);
        return route.push("/");
      } else {

    //make a new post
    const collectionRef = collection(db, 'posts'); //get a reference to the posts collection in the firestore database
    await addDoc(collectionRef, { //add a new document to the collection with the post data
        ...post,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
      });
      setPost({description: ""}); //reset the post state
      toast.success('Post has been made !', {position: toast.POSITION.TOP_CENTER,
      autoClose:1500,
    })
      return route.push('/') //navigate to the homepage
    }
  };

  
   //Check our user
   const checkUser = async () => { //function to check if the user is authenticated
    if (loading) return; //if still loading, return
    if (!user) route.push("/auth/login"); //if the user is not authenticated, navigate to the login page
    if (routeData.id) { //if there's an id parameter in the query
      setPost({ description: routeData.description, id: routeData.id }); //set the post state with the id and description from the query
    }
  };

  useEffect(() => {
    checkUser();
  }, [user, loading]);

  return (
    <div className="m-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
      <form onSubmit={submitPost}>
        <h1 className="text-2xl font-bold"></h1>
        {post.hasOwnProperty("id") ? "Edit your post" : "Create a new post"}
        <div className="py-2">

          <h3 className="tex-lg front-medium py-2">Description</h3>
          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small"
          ></textarea>
          <p className={`text-cyan-600 font-medium text-sm ${
              post.description.length > 300 ? "text-red-600" : ""
            }`}>
            {post.description.length}/300
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600  text-white font-medium p-2 y-2 rounded-lg text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
