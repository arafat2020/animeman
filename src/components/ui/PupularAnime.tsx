"use client"

import useFetch from "@/hook/useFetch"
import { truncateString } from "@/lib/lib";
import { PupularAnimeType } from "@/type/type";
import { Loader2 } from "lucide-react";

function PupularAnime() {
    const { isLoading, res } = useFetch({
        url: 'https://gogo-anime-exbbfz3to-arafat2020.vercel.app/popular',
        type: 'GET'
    })
    const data = res as PupularAnimeType[]
    return (
        <div className="w-full">
            <div className="w-full bg-blue-500 rounded-md p-2 flex justify-between my-6">
                {
                    isLoading ? <div className="flex text-zinc-500 font-sans font-semibold">
                        <Loader2 className="animate-spin" /><p>Loading....</p>
                    </div> : <h1 className="text-[1rem] font-bold font-sans text-zinc-50 ">
                        Pipular Anime for You
                    </h1>
                }
            </div>
            <div className="w-full flex flex-col justify-around items-center space-y-3">
                {
                    data?.map(e => {
                        return <div key={e.animeId} className='w-[90%] flex cursor-pointer glassBg2'>
                        <img src={e.animeImg} className='w-[60px] h[90px] rounded-md' />
                        <div className='flex-1 ml-2 text-zinc-50 font-sans'>
                          <h4 className='font-md font-medium'>
                            {truncateString(e.animeTitle.toString(),25)}
                          </h4>
                          <p className='text-sm'><span className='text-zinc-500 italic'> Release:</span>{" "} {e.releasedDate}</p>
                        </div>
                      </div>
                    })
                }
            </div>
        </div>
    )
}

export default PupularAnime