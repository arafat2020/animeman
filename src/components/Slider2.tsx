"use client"

import { cn } from "@/lib/utils";
import { PupularAnimeType } from "@/type/type"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { truncateString } from "@/lib/lib";
import { useProgress } from "@/providers/LoderProgressProvider";

function Slider2({ obj }: { obj: unknown }) {
    const data = obj as PupularAnimeType[]
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setIndex(i => i >= (data.length - 1) ? 0 : i + 1)
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div className="w-screen sm:w-full h-[270px] sm:h-[350px] rounded-lg mt-5 ">
            <div
                style={{
                    backgroundImage: `url(${data[index].animeImg})`
                }}

                className="w-full h-full sm:rounded-lg  bg-center relative">
                <div className="w-full h-1/5 sm:rounded-b-lg glassBg absolute bottom-0 left-0 p-4 flex items-center">
                    <h2 className="flex-1 text-zinc-100 font-bold italic underline text-xl sm:text-2xl">
                        {truncateString(data[index].animeTitle, 15)}
                    </h2>
                    <Button variant="outline" className="glassBg2 text-xl font-bold font-sans text-zinc-100">
                        Watch
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Slider2