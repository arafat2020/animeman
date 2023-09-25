"use client"
import { truncateString } from '@/lib/lib'
import { useProgress } from '@/providers/LoderProgressProvider'
import { IAnimeResult } from '@consumet/extensions'
import { useRouter } from 'next/navigation'

function Card4({ obj }: { obj: unknown }) {
  const objn = obj as IAnimeResult
  const genres = objn.genres as string[]
  const gnStrin = genres.join(', ')
  const { startPorgress,loading } = useProgress()
  const router = useRouter()
  function goToanime() {
    startPorgress()
    router.push(`/anime?id=${objn.id}`)
  }
  return (
    <div aria-disabled={loading} onClick={() => goToanime()} className='w-[90%] flex cursor-pointer'>
      <img src={objn.image} className='w-[60px] h[90px] rounded-md' />
      <div className='flex-1 ml-2 text-zinc-50 font-sans'>
        <h4 className='font-md font-medium'>
          {truncateString(objn.title.toString(), 25)}
        </h4>
        <p className='text-sm'><span className='text-zinc-500 italic'>Genres:</span>{" "} {gnStrin}</p>
      </div>
    </div>
  )
}

export default Card4