"use client"
import React from 'react'
import { ResultTopAnime } from '@/type/type'
import { truncateString } from '@/lib/lib'
import { Badge } from '../ui/badge'
import { ScrollArea } from '../ui/scroll-area'
import { Button } from '../ui/button'
import { useProgress } from '@/providers/LoderProgressProvider'
import { useRouter } from 'next/navigation'

function Card({ obj }: { obj: ResultTopAnime }) {
  const router = useRouter()
  const {startPorgress,loading} = useProgress()
  function goToAmime() {
    startPorgress()
    router.push(`/anime?id=${obj.id}`)
  }
  return (
    <div className='w-[290px] sm:w-[380px] h-[230px] glassBg2 m-3 p-[10px] flex text-zinc-100'>
      <img src={obj.image} alt="Anime image" className='w-3/6 h-full rounded-md object-contain' />
      <div className='w-3/6 p-1'>
        <h4 className='text-xl'>
          {truncateString(obj.title, 20)}
        </h4>
        <p className='text-sm italic'>Type:</p>
       <ScrollArea className='w-full h-1/3'>
       <div className='w-full flex flex-wrap'>
          {
            obj.genres.map(e => {
              return <div key={e} className='m-1'>
                <Badge variant='outline' className='text-blue-200 bg-blue-600'>
                  {e}
                </Badge>
              </div>
            })
          }
        </div>
       </ScrollArea>
       <Button onClick={()=>goToAmime()}  variant="outline" className='glassBg'>
        Watch
       </Button>
      </div>
    </div>
  )
}

export default Card