"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { cn } from '@/lib/utils';
import Slider from '../Slider';
import TopAnime from '../TopAnime';

const MainIndex=()=> {
    const [next, setnext] = useState(false)
    useMemo(() => {
      const timeout = setTimeout(() => {
        setnext(true)
      }, 2500);
    
      return () => {
        clearTimeout(timeout)
      }
    }, [])
    
    return (
        <ScrollArea className={cn('w-full h-full absolute z-10 opacity-0  transition flex flex-col', next && "opacity-100 ")}>
                <Slider />
                <TopAnime/>
        </ScrollArea>
    )
}

export default MainIndex