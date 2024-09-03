import prisma from "@/db/db";

async function createChapter(formData:FormData) {
    await prisma.chapter.create({
        data: {
            title: '',
            shortDetails: ''
        }
    })
    
}