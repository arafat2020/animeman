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
        <div className="slider2 w-screen sm:w-full h-[300px] sm:h-[350px]  mt-5 ">
            <div
                style={{
                    backgroundImage: `url(${data[index].animeImg})`
                }}

                className="w-full h-full  bg-center relative bg-cover">
                <div
                    style={{
                        background: 'linear-gradient(to left, rgba(0, 0, 0, .9) , transparent )'
                    }}
                    className="w-full h-full glassBg4 flex flex-col sm:flex-row justify-around items-center">
                    <div style={{
                        background: 'linear-gradient(to right, rgba(0, 0, 0, .3) , transparent )'
                    }} className="w-[200px] h-[90%] rounded-md p-3 mt-2 sm:mt-0">
                        <div style={{
                            backgroundImage: `url(${data[index].animeImg})`
                        }} className="w-full h-full rounded-md bg-center bg-cover bg-no-repeat">

                        </div>

                    </div>
                    <div className="w-full sm:w-[60%] text-center">
                        <h2 style={{
                            background: 'linear-gradient(to right, rgba(0, 0, 0, .3) , transparent )'
                        }} className="m-2 sm:m-0 font-sans text-2xl text-blue-400 font-bold p-2 rounded-md">{truncateString(data[index].animeTitle ? data[index].animeTitle : 'Erorr Finding Name', 25)}</h2>
                        <div className="w-full sm:w-auto flex space-x-2 m-4">
                            <button className="p-2 text-[1rem] font-sans text-blue-300 font-semibold glassBg ">Watch</button>
                            <button className="p-2 text-[1rem] font-sans text-blue-300 font-semibold glassBg">Explore</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slider2