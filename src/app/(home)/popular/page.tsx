import FinishLoad from '@/components/FinishLoad'
import PaginationForpopular from '@/components/PaginationForpopular'
import TopAnime from '@/components/TopAnime'
import { truncateString } from '@/lib/lib'
import { PupularAnimeType } from '@/type/type'
import { IAnimeResult, ISearch, ITitle } from '@consumet/extensions'
import Anilist from '@consumet/extensions/dist/providers/meta/anilist'
import React from 'react'

const getPoPulatAnime = async (page: number = 1) => {
    const data = await new Anilist().fetchPopularAnime(page)
    return data
}

async function PopulaPage({ searchParams }: { searchParams: { page: string | undefined } }) {
    const data = await getPoPulatAnime(parseInt(searchParams.page ? searchParams.page : '1')) as ISearch<IAnimeResult>

    return (
        <div>
            <FinishLoad trigger={searchParams.page} />
            <div className='w-screen sm:w-full flex flex-col justify-around sm:flex-row h-full'>
                <div className='w-full sm:w-[63%]'>
                    <div className="w-full bg-blue-500 rounded-md p-2 flex justify-between my-5">
                        <h1 className="text-xl font-bold font-sans text-zinc-50 ">
                            Homo {">"} Explore Popular Anime
                        </h1>
                    </div>
                    <div className='w-screen sm:w-full flex flex-wrap justify-around'>
                        {
                            data.results.map(e => {
                                const title = e.title as ITitle
                                return <div style={{
                                    background:`linear-gradient(to bottom, ${e.color} , transparent )`
                                }} key={e.animeId} className='p-1 m-1 rounded-md'>
                                    <div style={{
                                        backgroundImage: `url(${e.image})`
                                    }} className='w-[170px] h-[220px] m-2 rounded-md bg-center'>
                                        <div
                                            style={{
                                                background: `linear-gradient(to top, rgba(0, 0, 0, 1) , transparent )`
                                            }}
                                            className='w-full h-full rounded-sm relative '>
                                            <div className='w-full absolute bottom-0 left-0 p-2 font-sans text-zinc-50 glassBg rounded-b-md'>
                                                <p className='font-semibold'>{truncateString(title.english ? title.english : 'NAN', 15)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <PaginationForpopular page={searchParams.page} />
                </div>
                <div className='w-full sm:w-[33%]'>
                    <TopAnime home />
                </div>
            </div>
        </div>
    )
}

export default PopulaPage