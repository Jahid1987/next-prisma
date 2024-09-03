import prisma from "@/db/db";

export async function createCustomer() {
    await prisma.product.create({
        data: {
            title: 'this is testing. testing is passed',
        }
    })
}
