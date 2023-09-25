import { IAnimeInfo, IAnimeResult, ISearch } from '@consumet/extensions'
import React, { Fragment } from 'react'
import Card4 from '../card/Card4'
import { truncateString } from '@/lib/lib'
import { getRandomCover } from '@/data/CoverData'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { Play } from 'lucide-react'
import RecomendedAnime from '../RecomendedAnime'
import ButtonClient from '../ButtonClient'
type AnimeIndexProps = {
    animeDat: unknown,
    topairres: unknown,
    animeId:string
}
function AnimeIndex({ animeDat, topairres,animeId }: AnimeIndexProps) {
    const searchData = animeDat as IAnimeInfo
    const topairDta = topairres as ISearch<IAnimeResult>
        
    return (
        <div className='w-screen sm:w-full h-full flex flex-col sm:flex-row justify-around mt-6'>
            <div className='w-full sm:w-[63%]'>
                <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between">
                    <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                        Anime {'>'} {truncateString(searchData.title.toString(), 28)}
                    </h1>
                </div>
                <div className='w-full mt-6'>
                    <div style={{
                        backgroundImage: `url(${getRandomCover()?.url})`
                    }} className='w-full h-[240px] sm:h-[300px] bg-center rounded-md'>
                    </div>
                    <div className='w-full flex flex-col sm:flex-row items-center'>
                        <div className='ml-5  mt-[-40px]'>
                            <img src={searchData.image} alt="Anime Image" className='w-[180] h-[230px] rounded-md border-[5px] border-black' />
                        </div>
                        <div className='flex-1 mt-4 flex justify-around mx-2 sm:mx-0'>
                            <div className='w-[46%]'>
                                <p className='text-sm font-sans mt-1'>
                                    <span className='font-extrabold italic text-zinc-600'>Status:</span>
                                    {" "}
                                    <span className='text-blue-600'>{searchData.status}</span>
                                </p>
                                <p className='text-sm font-sans mt-1'>
                                    <span className='font-extrabold italic text-zinc-600'>Season:</span>
                                    {" "}
                                    <span className='text-blue-600'>{searchData.type}</span>
                                </p>
                                <p className='text-sm font-sans mt-1'>
                                    <span className='font-extrabold italic text-zinc-600'>Release:</span>
                                    {" "}
                                    <span className='text-blue-600'>{searchData.releaseDate}</span>
                                </p>
                                <p className='text-sm font-sans mt-1'>
                                    <span className='font-extrabold italic text-zinc-600'>Type:</span>
                                    {" "}
                                    <span className='text-blue-600'>{searchData.subOrDub}</span>
                                </p>
                                <p className='text-sm font-sans mt-1'>
                                    <span className='font-extrabold italic text-zinc-600'>Total Episods:</span>
                                    {" "}
                                    <span className='text-blue-600'>{searchData.totalEpisodes}</span>
                                </p>
                            </div>
                            <div className='w-full sm:w-[46%]'>
                                <p className='text-sm font-sans mt-2'>
                                    <span className='font-extrabold italic text-zinc-600'>Genres:</span>
                                </p>
                                <div className='w-full flex flex-wrap'>
                                    {
                                        searchData.genres?.map((e,i) => {
                                            return <Fragment key={i}>
                                                <Button  variant="outline" className='bg-transparent text-zinc-50 border-blue-600 font-sans font-medium bg-blue-400 h-[27px] m-2'>
                                                    {e}
                                                </Button>
                                            </Fragment>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full px-2 sm:px-0'>
                        <p className='text-lg font-sans mt-2'>
                            <span className='font-extrabold italic text-zinc-600'>Other Name:</span>
                            {" "}
                            <span className='text-blue-600'>{searchData.otherName}</span>
                        </p>
                        <p className='text-sm font-sans mt-2'>
                            <span className='font-extrabold italic text-blue-600'>Description:</span>
                            {" "}
                            <span className='text-zinc-200'>{searchData.description}</span>
                        </p>
                    </div>
                    <div className='w-full '>
                        <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between my-6">
                            <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                                Episodes
                            </h1>
                        </div>

                        <ScrollArea className='w-full h-[350px] flex flex-col '>
                            {
                                searchData.episodes?.map(e => {
                                    return <div key={e.id} className='w-[95%] m-auto bg-slate-600 p-2 mb-2 rounded-md flex justify-between items-center'>
                                        <p className='text-[1rem] font-sans font-medium text-zinc-200'>Episode {e.number}</p>
                                        <ButtonClient id={e.id} animeId={animeId}/>
                                    </div>
                                })
                            }
                        </ScrollArea>
                        <div className="w-full bg-blue-500 rounded-md p-2 flex justify-between my-6">
                            <h1 className="text-xl font-bold font-sans text-zinc-50 ">
                                Recomended
                            </h1>
                        </div>
                        <RecomendedAnime genres={searchData.genres}/>
                    </div>
                </div>

            </div>
            <div className='w-full sm:w-[32%]'>
                <div className="w-full bg-blue-500 rounded-md p-2 flex justify-between">
                    <h1 className="text-xl font-bold font-sans text-zinc-50 ">
                        Hot And New
                    </h1>

                </div>
                <div className='w-full mt-6 flex flex-col justify-around items-center space-y-3'>
                    {
                        topairDta.results.map(e => {
                            return <Card4 key={e.id} obj={e} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AnimeIndex