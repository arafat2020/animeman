"use client"
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'
import { useProgress } from '@/providers/LoderProgressProvider'
import { useRouter } from 'next/navigation'
import { saveToHistory } from '@/lib/saveToHistory'

function ButtonClient({ id, animeId }: { id: string, animeId: string }) {
    const { loading, startPorgress } = useProgress()
    const [isLoading,startTransition] = useTransition()
    const { push } = useRouter()
    function goToWatch() {
        startPorgress()
        push(`/watch?w=${id}&id=${animeId}`)
        startTransition(()=>{saveToHistory(animeId,id)})
    }
    return (
        <Button disabled={loading} onClick={() => goToWatch()} className='bg-blue-400 h-[32px]'>
            <Play />{' '}Watch
        </Button>
    )
}

export default ButtonClient