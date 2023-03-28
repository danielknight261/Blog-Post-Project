import { Auth } from "../../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import {useEffect, useState} from "react"

export default function Post(){
    return(
        <div className="m-20 p-12 shadow-lg rounded-lg max-w-md mx-auto">
            <form>
                <h1 className="text-2xl font-bold">Create a New Post</h1>
                <div className="py-2">
                    <h3 className="tex-lg front-medium py-2">Description</h3>
                    <textarea className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small"></textarea>
                    <p className="">/300</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}