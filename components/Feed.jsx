"use client"
import { useState,useEffect } from "react"

import PromptCard from "./PromptCard"
const PromptCardList = ({data, handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard key={post._id} post={post} handleSearchChange={handleTagClick}/>
      ))}
    </div>
  )
}

const Feed = () => {
  
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])
  const handleSearchChange = (event) => {
    
  }
  useEffect(() => {
   const fecthPosts = async ()=>{
    const response = await fetch('/api/prompt')
    const data = await response.json()
    setPosts(data)
   }
   fecthPosts()
  }, [])
  
  
  return (
   <section className="feed">
    <form className="realative w-full flex-center">
      <input type="text" placeholder="Busca por un tag o un nombre de usario" value={searchText} onChange={handleSearchChange} required className="search_input peer"/>
    </form>
    <PromptCardList
     data={posts} 
    handleTagClick={()=>{}}/>
   </section>
  )
}

export default Feed