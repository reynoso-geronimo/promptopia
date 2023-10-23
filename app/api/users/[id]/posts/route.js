import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export  const GET = async (request,{params})=>{
    try {
        await connectToDB()
        const prommpts = await Prompt.find({creator:params.id}).populate('creator')
        return new Response(JSON.stringify(prommpts),{status:200})
    } catch (error) {
        return new Response("Fallo al obtener los prompts ",{status:500})
    }
}