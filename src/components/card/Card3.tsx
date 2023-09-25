
"use client"
import { truncateString } from '@/lib/lib';
import { cn } from '@/lib/utils';
import { useProgress } from '@/providers/LoderProgressProvider';
import { IAnimeResult } from '@consumet/extensions'
import { useRouter } from 'next/navigation';
import React from 'react'

function Card3({ obj }: { obj: IAnimeResult }) {
    const { startPorgress, loading } = useProgress()
    const router = useRouter()
    function goToanime() {
        startPorgress()
        router.push(`/anime?id=${obj.id}`)
    }
    return (
        <div
            aria-disabled={loading}
            onClick={() => goToanime()}
            style={{
                backgroundImage: `url(${obj.image})`
            }} className='w-[180px] h-[230px] rounded-md bg-no-repeat bg-center m-2 relative cursor-pointer'>
            <div className={cn('absolute top-1 right-1 text-zinc-50 px-1 font-medium rounded-sm', obj.subOrDub === 'dub' ? 'bg-blue-600' : 'glassBg')}>
                <p className='font-sm font-sans capitalize'>
                    {obj.subOrDub === 'dub' ? 'dub' : 'sub'}
                </p>
            </div>
            <div className='w-full absolute rounded-b-md bottom-0 left-0 glassBg text-zinc-50'>
                <h4 className=' text-lg font-sans font-semibold ml-1'>
                    {truncateString(obj.title.toString(), 13)}
                </h4>
                <p className='text-sm font-sans ml-1'>
                    {obj.releaseDate}
                </p>
            </div>
        </div>
    )
}

export default Card3