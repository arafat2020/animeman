"use client"

import { RecentAnimeType, SubOrDub } from "@/type/type"
import { useState } from "react"
import { Switch } from "./ui/switch"
import Card2 from "./card/Card2"
import { MoveLeftIcon, MoveRightIcon } from "lucide-react"

function RecentEpisode({ obj }: { obj: unknown }) {
    const data = obj as RecentAnimeType[]
    const [sub, setsubOrDub] = useState<boolean>(true)
    console.log(sub);

    return (
        <div className="w-full mt-5 mb-5">
            <div className="w-screen sm:container bg-blue-500 rounded-md p-2 flex justify-between">
                <h1 className="text-xl font-bold font-sans text-zinc-50 ">
                    Recent Updates
                </h1>
                <div className="flex space-x-2">
                    <Switch onCheckedChange={() => setsubOrDub(e => !e)} />
                    <p className="text-zinc-50 font-bold font-sans">
                        {sub ? 'Sub' : 'Dub'}
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-around items-center">
                {
                    data.map(e => {
                        return <Card2 sub={e.subOrDub === SubOrDub.Sub} key={e.animeId} obj={e} />
                    })
                }
            </div>
            <div className="w-[45%] sm:w-[25%] flex justify-around m-auto my-5 text-lg items-center bg-slate-700 font-bold rounded-md p-2">
                <button>
                    <MoveLeftIcon className="p-1 bg-blue-600 rounded-md" />
                </button>
                <p className="bg-blue-600 px-2 rounded-md">1</p>
                <button>
                    <MoveRightIcon className="p-1 bg-blue-600 rounded-md" />
                </button>
            </div>
        </div>
    )
}

export default RecentEpisode