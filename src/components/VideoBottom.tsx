"use client"
import useOptimistic from '@/hook/useOptimistic'
import { truncateString } from '@/lib/lib'
import { reactToAnime } from '@/lib/reactToanime'
import { saveToHistory } from '@/lib/saveToHistory'
import { cn } from '@/lib/utils'
import { useProgress } from '@/providers/LoderProgressProvider'
import { IAnimeInfo } from '@consumet/extensions'
import { ReactType } from '@prisma/client'
import { HeartIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { Fragment, useState, useTransition } from 'react'

function Description({ str = 'NOT_FOUND' }: { str?: string }) {
    const [minified, setminified] = useState<Boolean>(true)
    return <Fragment>
        <p className='text-sm font-sans mt-2'>
            <span className='font-extrabold italic text-blue-600'>Description:</span>
            {" "}
            {minified ? <span className='text-zinc-200'>{truncateString(str, 150)}</span> : <span>{str}</span>}{" "}
            <span className='font-bold text-zinc-500 cursor-pointer' onClick={() => setminified(mimnified => !mimnified)}>{minified ? 'Show More' : '...Show Less'}</span>
        </p>
    </Fragment>
}

function VideoBottom({ obj, episodeId, animeId }: { obj: IAnimeInfo, episodeId: string, animeId: string }) {
    const epIndex = obj.episodes?.findIndex(e => e.id === episodeId)
    const { push } = useRouter()
    const { startPorgress, loading } = useProgress()
    const [isLoading, startTransition] = useTransition()
    const { setexpected, expected, onError, onSuccess } = useOptimistic({ defaultValue: null })
    console.log(expected);


    function GoToPrev() {
        if (epIndex === 0 || epIndex === undefined || obj.episodes === undefined) return
        startPorgress()
        push(`/watch?w=${obj.episodes[epIndex - 1].id}&id=${animeId}`)
        startTransition(() => {
            if (obj.episodes === undefined) return
            saveToHistory(animeId, obj.episodes[epIndex - 1].id)
        })
    }
    function GoToNext() {
        if (epIndex === undefined || obj.episodes === undefined) return
        if (epIndex === (obj.episodes.length - 1)) return
        startPorgress()
        push(`/watch?w=${obj.episodes[epIndex + 1].id}&id=${animeId}`)
        startTransition(() => {
            if (obj.episodes === undefined) return
            saveToHistory(animeId, obj.episodes[epIndex + 1].id)
        })
    }
    return (
        <div className='w-full p-4'>
            <div className='w-full'>
                <p className='text-2xl font-sans mt-2'>
                    <span className='font-extrabold italic text-zinc-600'>Other Name:</span>
                    {" "}
                    <span className='text-blue-600'>{obj.otherName}</span>
                </p>
                <Description str={obj.description?.toString()} />
            </div>
            <div className='w-full flex flex-col space-y-2 sm:space-y-0  sm:flex-row justify-around items-center sm:justify-between mt-3'>
                <div className='flex bg-blue-500 text-blue-200 rounded-full items-center'>
                    <ThumbsUpIcon className={cn('m-2 cursor-pointer transition', expected === ReactType.LIKE && 'rounded-full bg-blue-200 text-blue-500 p-1 w-[35px] h-[35px]')} onClick={async () => {
                        setexpected(expected === ReactType.LIKE ? null : ReactType.LIKE)
                        startTransition(() => reactToAnime({
                            animeId: animeId,
                            episodeId: episodeId,
                            type: ReactType.LIKE === expected ? null : ReactType.LIKE,
                            onError: onError,
                            onSuccess: onSuccess
                        }))
                    }} />
                    <ThumbsDownIcon className={cn('m-2 cursor-pointer transition', expected === ReactType.DISLIKE && 'rounded-full bg-blue-200 text-blue-500 p-1 w-[35px] h-[35px]')} onClick={async () => {
                        setexpected(expected === ReactType.DISLIKE ? null : ReactType.DISLIKE)
                        startTransition(() => reactToAnime({
                            animeId: animeId,
                            episodeId: episodeId,
                            type: ReactType.DISLIKE === expected ? null : ReactType.DISLIKE,
                            onError: onError,
                            onSuccess: onSuccess
                        }))
                    }} />
                    <HeartIcon className={cn('m-2 cursor-pointer transition', expected === ReactType.LOVE && 'rounded-full bg-blue-200 text-blue-500 p-1 w-[35px] h-[35px]')} onClick={async () => {
                        setexpected(expected === ReactType.LOVE ? null : ReactType.LOVE)
                        startTransition(() => reactToAnime({
                            animeId: animeId,
                            episodeId: episodeId,
                            type: ReactType.LOVE === expected ? null : ReactType.LOVE,
                            onError: onError,
                            onSuccess: onSuccess
                        }))
                    }} />
                </div>
                <div className='flex justify-between space-x-2 flex-0'>
                    <button onClick={() => GoToPrev()} disabled={(epIndex === 0) || loading} className='bg-blue-500 text-blue-100 rounded-md font-sans font-semibold p-2'>Previous Ep.</button>
                    <button onClick={() => GoToNext()} disabled={(epIndex === ((obj.episodes ? obj.episodes.length : 1) - 1)) || loading} className='bg-blue-500 text-blue-100 rounded-md font-sans font-semibold p-2'>Next Ep.</button>
                </div>
            </div>
        </div>
    )
}

export default VideoBottom