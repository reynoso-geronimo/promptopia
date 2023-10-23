import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export  const GET = async (request,{params})=>{
    try {
        await connectToDB()
        const prompt = await Prompt.find({creator:params.id}).populate('creator')
        return new Response(JSON.stringify(prompt),{status:200,headers: {
            'Cache-Control': 'max-age=10',
            'CDN-Cache-Control': 'max-age=60',
            'Vercel-CDN-Cache-Control': 'max-age=3600',
          },})
    } catch (error) {
        return new Response("Fallo al obtener los prompts ",{status:500})
    }
}