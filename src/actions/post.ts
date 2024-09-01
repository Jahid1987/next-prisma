"use server"

import prisma from "@/db/db"

export async function createPost(formData: FormData){
    console.log((formData.get('title') as string).replace(/\s+/g, "-").toLowerCase())
    await prisma.post.create({
        data: {
            title: formData.get('title') as string,
            slug: (formData.get('title') as string).replace(/\s+/g, "-").toLowerCase(),
            content: formData.get('content') as string
        }
    })
    
}