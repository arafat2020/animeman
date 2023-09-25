import React from 'react'

function AuthLayOut({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full h-full flex  justify-around items-center bg-black'>
            <div className='text-slate-300'>
                <img src="/logo2.png" className='w-[250px] h-[250px] ' />
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-slate-300">
                    ANIMEAMAN
                </h2>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                   Dimension of All Anime
                </h4>
            </div>
            {children}
        </div>
    )
}

export default AuthLayOut