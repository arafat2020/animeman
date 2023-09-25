import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
import prisma from "./db";
import { ObjectId } from "bson";

export async function createAnimeInstaance(animeId:string) {
    const id  = new ObjectId()
    const ggInfo = await new Gogoanime().fetchAnimeInfo(animeId)
    const animeInstance = await prisma.animeInstance.create({
        data:{
            id:`${id}`,
            image:ggInfo.image as string,
            title:ggInfo.title as string,
            animeId:animeId,
            genres:ggInfo.genres,
        }
    },)
    return animeInstance
}