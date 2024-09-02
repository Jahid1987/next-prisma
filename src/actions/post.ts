"use server"

import prisma from "@/db/db"
import { Prisma } from "@prisma/client"
import { redirect } from "next/navigation"

export async function createPost(formData: FormData){
   
    try {
        await prisma.post.create({
            data: {
                title: formData.get('title') as string,
                slug: (formData.get('title') as string).replace(/\s+/g, "-").toLowerCase(),
                content: formData.get('content') as string,
                User: {
                    connect: {
                        email: 'jahid@gmail.com'
                    }
                }
            }
        }) 
    } catch (error) {
        console.log(error)
       if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            console.log("Uniqe constraint violation.")
        }
       } 
    }
    
    redirect('/posts') 
}

 
export async function editPost(formData: FormData){
    await prisma.post.update({
        where: {id: formData.get('id') as string},
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string
        }
    })
    redirect('/posts')
}

export async function deletePost(formData:FormData) {
    await prisma.post.delete({
        where: {id: formData.get('id') as string}
    })
    redirect('/posts')
}