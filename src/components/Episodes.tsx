"use client"

import { IAnimeInfo } from "@consumet/extensions"
import { ScrollArea } from "./ui/scroll-area"
import ButtonClient from "./ButtonClient"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import PupularAnime from "./ui/PupularAnime"

function Episodes({ info, episodeID, animeId }: { info: IAnimeInfo, episodeID: string, animeId: string }) {
    const index = info.episodes ? info.episodes.findIndex(e => e.id === episodeID) : 0
    return (
        <div className='w-full sm:w-[32%]'>
            <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between mb-6">
                <h1 className="text-[1rem] font-bold font-sans text-zinc-50 ">
                    Curently Watching: Episode {`${index + 1}`}
                </h1>
            </div>

            <ScrollArea className='w-full h-[380px] flex flex-col '>
                {
                    info.episodes?.map(e => {
                        return <div key={e.id} className={cn('w-[95%] m-auto bg-slate-600 p-2 mb-2 rounded-md flex justify-between items-center',
                            e.id === episodeID && 'bg-slate-400')}>
                            <p className='text-[1rem] font-sans font-medium text-zinc-200'>Episode {e.number}</p>
                            {e.id === episodeID ? <Button variant='outline' className="h-[32px]" disabled>Watching</Button> : <ButtonClient id={e.id} animeId={animeId} />}
                        </div>
                    })
                }
            </ScrollArea>
            <PupularAnime />

        </div>
    )
}

export default Episodes