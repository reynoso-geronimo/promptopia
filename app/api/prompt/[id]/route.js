import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export  const GET = async (request,{params})=>{
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')
        if(!prompt)return new Response("Prompt no encontrado" , {status:404})
        return new Response(JSON.stringify(prompt),{status:200})
    } catch (error) {
        return new Response("Fallo al obtener los prompts ",{status:500})
    }
}

export const PATCH = async (request, {params})=>{
    const {prompt , tag} = await request.json()
    try {
        await connectToDB()
        const exsistingPrompt = await Prompt.findById(params.id)
        if(!exsistingPrompt)return new Response("Prompt no encontrado" , {status:404})
        exsistingPrompt.prompt= prompt
        exsistingPrompt.tag= tag

        await exsistingPrompt.save()
        return new Response(JSON.stringify(exsistingPrompt),{status:200})
    } catch (error) {
        if(!exsistingPrompt)return new Response("Fallo al actualizar" , {status:500})
    }
}

export const DELETE = async (request, {params})=>{
    try {
        await connectToDB()
        await Prompt.findByIdAndRemove(params.id)
        return new Response('Prompt elminado', {status:200})
    } catch (error) {
       
        return new Response("Fallo al eliminar" , {status:500})
    }
}