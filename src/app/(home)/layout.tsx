import Nav from '@/components/Nav'
import ScrollClient from '@/components/ScrollClient'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full h-full bg-black text-zinc-300'>
            <ScrollClient>
                <Nav />
                {children}
            </ScrollClient>
        </div>
    )
}

export default layout