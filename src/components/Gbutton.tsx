"use client"

import { useProgress } from "@/providers/LoderProgressProvider"
import { useRouter } from "next/navigation"

function Gbutton({ e }: { e: string }) {
    const { push } = useRouter()
    const {startPorgress} = useProgress()
    return (
        <button
            onClick={() => {
                startPorgress()
                push(`/genres?genre=${e}`)
            }}
            style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, .6) , transparent )'
            }} key={e} className='py-1 px-2 rounded-md capitalize font-sans text-slate-400 font-semibold m-[.5rem] transition hover:text-slate-100'>
            {e}
        </button>
    )
}

export default Gbutton