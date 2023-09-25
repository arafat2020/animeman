"use client"

import { PupularAnimeType } from "@/type/type"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { truncateString } from "@/lib/lib";
import gsap from "gsap";

function Slider2({ obj }: { obj: unknown }) {
    const data = obj as PupularAnimeType[]
    const [index, setIndex] = useState<number>(0)
    const [visable, setVisable] = useState<boolean>(false)
    const gs = gsap
    useEffect(() => {

        const interval = setInterval(async () => {
            await gs.to('.slider2', {
                translateX: -100,
                opacity: 0,
                duration: 1,
            })
            setIndex(i => i >= (data.length - 1) ? 0 : i + 1)
        }, 5000)
        if (!visable) clearInterval(interval)
        return () => {
            clearInterval(interval)
        }
    }, [visable])

    useEffect(() => {
        const img = new Image()
        img.src = data[index].animeImg
        img.onload = () => {
            gs.to('.slider2', {
                translateX: 0,
                opacity: 1,
                duration: 2,
            }).then(() => {
                setVisable(true)
            })
        }
    }, [index])
    return (
        <div className="slider2 w-screen sm:w-full h-[270px] sm:h-[350px]  mt-5 ">
            <div
                style={{
                    backgroundImage: `url(${data[index].animeImg})`
                }}

                className="w-full h-full  bg-center relative">
                <div
                style={{
                    background:'linear-gradient(to top, rgba(0, 0, 0, .9) , transparent )'
                }}
                 className="w-full h-full">
                    <div className="w-full h-1/5  glassBg absolute bottom-0 left-0 p-4 flex items-center">
                        <h2 className="flex-1 text-zinc-100 font-bold italic underline text-xl sm:text-2xl">
                            {truncateString(data[index].animeTitle, 15)}
                        </h2>
                        <Button variant="outline" className="glassBg2 text-xl font-bold font-sans text-zinc-100">
                            Watch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider2