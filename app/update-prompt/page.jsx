"use client";

import { useRouter,useSearchParams  } from "next/navigation";
import { useState,useEffect } from "react";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router =  useRouter()
  const searchParams= useSearchParams()
  const promptId= searchParams.get('id')

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setSubmitting] = useState(false);



 useEffect(() => {
    const getPromptDetails=async ()=>{
       
        const response = await fetch(`/api/prompt/${promptId}`)
        const data = await response.json()
        setPost({
            prompt: data.prompt,
            tag:data.tag
        })
    }
    if(promptId) getPromptDetails()
    
  }, [promptId])

   const udpatePrompt = async event => {
     event.preventDefault();
     setSubmitting(true);
     if(!promptId) return alert(`No se encontro ID de prompt`)
     try {
       const response = await fetch(`/api/prompt/${promptId}`, {
         method: "PATCH",
         body: JSON.stringify({
           prompt: post.prompt,
           tag: post.tag,
         }),
       });
       if (response.ok) {
         router.push("/");
       }
     } catch (error) {
       console.log(error);
     } finally {
       setSubmitting(false);
     }
   };

  return (
    <Form
      type="Editar"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={udpatePrompt}
    />
  );
};

export default UpdatePrompt;
