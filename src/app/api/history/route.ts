import { createAnimeInstaance } from "@/lib/createAnimeInstance"
import prisma from "@/lib/db"
import { currentUser } from "@clerk/nextjs"
import { ObjectId } from "bson"
import { NextResponse } from "next/server"

export async function GET(req: Request ) {
    const  {searchParams}  = new URL(req.url) 
    if (!searchParams.get("animeId")) new NextResponse("animeID not found",{status:400})
    
    
    const id = new ObjectId()
    const user = await currentUser()
    const animeInstance = await prisma.animeInstance.findUnique({
        where: {
            animeId: searchParams.get("animeId") as string
        }
    })
    
    if (!animeInstance) {
        const newInstance = await createAnimeInstaance(searchParams.get("animeId") as string)
        const createHistory = await prisma.history.create({
            data: {
                id: `${id}`,
                animeInstanceId: newInstance.animeId,
                userId: user?.id as string,
                date: new Date(),
                episodeId:searchParams.get("episodeId") as string
            }
        })
        return NextResponse.json({
            createHistory
        })
    }
    const createHistory = await prisma.history.create({
        data: {
            id: `${id}`,
            animeInstanceId: animeInstance.animeId as string,
            userId: user?.id as string,
            date: new Date(),
            episodeId:searchParams.get("episodeId") as string
        }
    })
    return NextResponse.json({
        createHistory
    })
}