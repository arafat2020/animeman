"use client"
import { DataSlider } from '@/data/SliderData'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useProgress } from '@/providers/LoderProgressProvider'

function Slider() {
    const [index, setIndex] = useState<number>(0)
    const router = useRouter()
    const {startPorgress} = useProgress()
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => i >= (DataSlider.length - 1) ? 0 : i + 1)
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    console.log(index, DataSlider.length);
    function goToHaome() {
        startPorgress()
        router.push('/home')
    }
    return (
        <div className='container h-[550px] mt-[50px] flex flex-col  items-center'>
            <div className='w-1/2 flex-1 '>
                <div className='text-slate-300 flex items-center justify-around'>
                    <img src="/logo2.png" className='w-[200px] h-[200px] object-contain' />
                    <div className='flex-1'>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-slate-300">
                            ANIMEAMAN
                        </h2>
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Dimension of All Anime
                        </h4>
                        <div className='flex items-center space-x-2'>
                            <blockquote className=" border-l-2 pl-6 italic">
                                Powered By:
                            </blockquote>
                            <img src="/consumet.png" alt="consumet Logo" className='w-[50px] h-[50px] rounded-s-full' />
                            <a href="https://github.com/consumet">
                                <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold','text-slate-900')}>
                                    Consumet
                                </code>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='w-full sm:w-1/2 h-4/5 rounded-lg relative'>
                <div
                    style={{
                        backgroundImage: `url(${DataSlider[index].imgUrl})`,
                    }}
                    className='w-full h-full absolute top-0 left-0 '>

                </div>
                <div className='w-full h-full flex flex-col justify-center glassBg absolute top-0 left-0 z-10'>
                    <div className='flex absolute top-2 right-2 space-x-2 font-bold text-zinc-800'>
                        <Button onClick={()=>goToHaome()} className='glassBg' variant="outline">Go to home</Button>
                        <Button className='glassBg' variant="outline">Search Anime</Button>
                    </div>
                    {
                        DataSlider.map((e, i) => {
                            return (
                                <img key={e.id} src={e.imgUrl} alt="Slider iamge glassBg" className={
                                    cn('w-[250px] sm:w-[300px] h-[200px] rounded-lg object-contain transition hidden ml-2', i === index && 'inline')
                                } />
                            )
                        })
                    }
                    {
                        DataSlider.map((e, i) => {
                            return (
                                <div key={e.id} className={cn('absolute right-2 bottom-2 text-zinc-800 hidden', i === index && 'inline')}>
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight italic">
                                        {e.text}
                                    </h4>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Slider