"use client"

import { useRouter } from "next/navigation";
import { userAgentFromString } from "next/server";
import { useState } from "react";

export default function EditPostForm ({id, title, description}) {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
            method: "PUT",
            headers :{
                "Content-type" : "application/json"
            }, 
            body: JSON.stringify({newTitle, newDescription})
           });
           if(!res.ok) {
            throw new Error("Failed to Update")
           }
           router.push(`/`)
        } catch (error) {
            
        }

    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-8 py-2" type="text" placeholder="Post Title"></input>
        <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-8 py-2" type="text" placeholder="Post Desciption"></input>
        <button type ='submit' className="bg-green-600 text-white py-3 px-6 w-fit hover:bg-green-400 ">Update Topic</button>
         </form>
    )
}