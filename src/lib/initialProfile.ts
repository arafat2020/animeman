import { currentUser } from "@clerk/nextjs";
import prisma from "./db";
import { ObjectId } from "bson";

export async function initialProfile() {
    const user = await currentUser()
    if (!user) return null;
    const profile = await prisma.user.findUnique({
        where:{
            userId:user?.id
        }
    })
    if (!profile) {
        const id = new ObjectId()
        const newUser = await prisma.user.create({
            data:{
                id:`${id}`,
                userId:user.id,
                name:`${user.firstName} ${user.lastName}`,
                profilePic: user.imageUrl,
                joinedAt: new Date()
            }
        })
        return newUser
    }
    return profile
}