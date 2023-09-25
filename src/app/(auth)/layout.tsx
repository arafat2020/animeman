import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

function AuthLayOut({ children }: { children: React.ReactNode }) {
    return (
       <ScrollArea className='w-full h-full'>
         <div className='w-full h-full sm:h-screen flex flex-col sm:flex-row justify-around items-center bg-black'>
            <div className='text-slate-300'>
                <img src="/logo2.png" className='w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] ' />
                <h2 className="scroll-m-20 border-b pb-2 text-xl sm:text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-slate-300">
                    ANIMEAMAN
                </h2>
                <h4 className="scroll-m-20 text-sm sm:text-xl font-semibold tracking-tight">
                   Dimension of All Anime
                </h4>
            </div>
            {children}
        </div>
       </ScrollArea>
    )
}

export default AuthLayOut