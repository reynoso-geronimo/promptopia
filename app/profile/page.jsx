"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fecthPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) {
      fecthPosts();
    }
  }, [session?.user.id]);

  const handleEdit =  post => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(`Estas seguro de que quieras elimar este prompt?`)
    if(hasConfirmed){
      try {
        await fetch (`/api/prompt/${post._id.toString()}`,{
          method:"DELETE"
        })
        const filteredPosts = posts.filter((p)=>(p._id!==post._id))
        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <Profile
      name={"Mi"}
      desc={"Bienvenido a tu pagina de perfil"}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
