"use client"
import { useProgress } from '@/providers/LoderProgressProvider'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

function PaginationForpopular({ page }: { page: string | undefined }) {
    const { startPorgress, loading } = useProgress()
    const router = useRouter()
    function goToPrev() {
        if (!page ) return
        startPorgress()
        if (page === '2') return router.push(`/popular`)
        router.push(`/popular?page=${parseInt(page) - 1
            }`)
    }
    function goToMext() {
        startPorgress()
        router.push(`/popular?page=${parseInt(page ? page : '1') + 1
            }`)
    }
    console.log(typeof page);
    
    return (
        <div className="w-[45%] sm:w-[25%] flex justify-around m-auto my-5 text-lg items-center bg-slate-700 font-bold rounded-md p-2">
            {page !== undefined ? <button
                onClick={() => goToPrev()}
            >
                <MoveLeftIcon className="p-1 bg-blue-600 rounded-md" />
            </button> : null}
            <p className="bg-blue-600 px-2 rounded-md">{page?page:1}</p>
            <button
                onClick={() => goToMext()}
            >
                <MoveRightIcon className="p-1 bg-blue-600 rounded-md" />
            </button>
        </div>
    )
}

export default PaginationForpopular