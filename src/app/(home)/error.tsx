'use client'
import FinishLoad from "@/components/FinishLoad"
import { useProgress } from "@/providers/LoderProgressProvider"
import { useEffect, useState } from "react"

// Error components must be Client Components

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const { startPorgress, loading } = useProgress()
    const [onlie, setonlie] = useState<boolean>(true)
    useEffect(() => {
        window.addEventListener('offline', () => {
            setonlie(false)
        })
        window.addEventListener('online', () => {
            setonlie(true)
        })
    }, [])

    return (
        <div className='w-full h-full'>
            <FinishLoad />
            <h2 className="text-5xl text-blue-500 font-sans text-center">Something went wrong!</h2>
            <p className="text-center font-sans text-red-500 my-7">{`${error}`}</p>
            {onlie === false ? <p className="text-center font-sans text-red-500 my-7">Make sure you have an proper internet connection</p> : null}
            <div className="w-full flex justify-around my-6">
                <button
                    disabled={loading}
                    className="font-sans font-bold text-xl text-zinc-300 glassBg p-4 rounded-md"
                    onClick={
                        () => {
                            startPorgress()
                            reset()
                        }
                    }
                >
                    Try again
                </button>
            </div>
        </div>
    )
}