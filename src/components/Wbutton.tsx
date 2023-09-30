"use client"

import { useProgress } from "@/providers/LoderProgressProvider"
import { useRouter } from "next/navigation"

function Wbutton({id}:{id:string}) {
    const { startPorgress, loading } = useProgress()
    const {push} = useRouter()
    function GoToAnime() {
        startPorgress()
        push(`/anime?id=${id}`)
    }
    return (
        <button disabled={loading} onClick={()=>GoToAnime()} className='p-2 my-2 glassBg m-auto font-semibold text-sm'>Watch</button>
    )
}

export default Wbutton