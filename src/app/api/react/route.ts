import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime";
import { ReactType } from "@prisma/client";
import { ObjectId } from "bson";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const animeID = searchParams.get("id")
    const type = searchParams.get("type")
    const user = await currentUser()

    if (!animeID) new NextResponse("animeID not found", { status: 400 })
    const reacted = await prisma.react.findFirst({
        where: {
            userId: user?.id as string,
            animeInstanceId: animeID as string
        }
    })
    if (reacted) {
        if (!type || type === "null") {
            await prisma.react.delete({
                where: {
                    id: reacted.id
                }
            })
            return NextResponse.json({
                msg: 'Deleted'
            })
        } else {
            if (reacted.react === type) return NextResponse.json({
                msg: 'Allready reacted'
            }, {
                status: 400
            })
            const updtReact = await prisma.react.update({
                where: {
                    id: reacted.id
                },
                data: {
                    react: type as ReactType
                }
            })
            return NextResponse.json({
                updtReact
            })
        }
    }
    function Id(): string {
        const id = new ObjectId() as unknown
        return id as string
    }

    try {
        const animeInstence = await prisma.animeInstance.findUnique({
            where: {
                animeId: animeID as string
            }
        })
        if (!animeInstence) {
            const anime = await new Gogoanime().fetchAnimeInfo(animeID as string)
            const newAinstance = await prisma.animeInstance.create({
                data: {
                    id: Id(),
                    animeId: animeID as string,
                    image: anime.image as string,
                    title: anime.title as string,
                    description: anime.description,
                    relese: anime.releaseDated,
                    React: {
                        create: {
                            id: Id(),
                            userId: user?.id as string,
                            react: type as ReactType
                        }
                    }
                },
                include: {
                    React: {
                        where: {
                            userId: user?.id as string
                        }
                    }
                }
            })
            return NextResponse.json({
                data: newAinstance
            })
        }
        const react = await prisma.animeInstance.update({
            where: {
                animeId: animeInstence.animeId
            },
            data: {
                React: {
                    create: {
                        id: Id(),
                        userId: user?.id as string,
                        react: type as ReactType
                    }
                }
            },
            include: {
                React: {
                    where: {
                        userId: user?.id as string
                    }
                }
            }
        })

    } catch (error) {
        return NextResponse.json({
            err: `${error}`
        }, { status: 500 })
    }
}