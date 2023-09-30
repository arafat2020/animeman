import FinishLoad from '@/components/FinishLoad'
import React from 'react'
import { Genres as genres } from "@/data/Genres";
import { getRandomCover } from '@/data/CoverData';
import Gogoanime from '@consumet/extensions/dist/providers/anime/gogoanime';
import { truncateString } from '@/lib/lib';
import Gbutton from '@/components/Gbutton';
import Wbutton from '@/components/Wbutton';

const getAnimeForGenres = async (genre: string) => {
    const data = await new Gogoanime().fetchGenreInfo(genre)
    return data
}

async function Genres({ searchParams }: { searchParams: { genre: string } }) {
    const data = await getAnimeForGenres(searchParams.genre ? searchParams.genre : genres[Math.floor(Math.random() * genres.length)])
    return (
        <div className='w-screen sm:w-full '>
            <FinishLoad trigger={searchParams.genre} />
            <div className='w-full flex flex-col sm:flex-row justify-around'>
                <div className="w-full sm:w-[30%]">
                    <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between my-6">
                        <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                            Available Generes
                        </h1>
                    </div>
                    <div style={{
                        backgroundImage: `url(${getRandomCover().url})`
                    }} className='w-full flex flex-wrap justify-around rounded-md bg-cover bg-center bg-no-repeat '>
                        <div style={{
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 1) , transparent )'
                        }} className='w-full glassBg rounded-md p-1'>
                            {genres.map(e => {
                                return <Gbutton key={e} e={e} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-[60%]">
                    {
                        searchParams.genre ?
                            <div className='w-full'>
                                <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between my-6">
                                    <h1 className="text-[1rem] capitalize sm:text-xl font-bold font-sans text-zinc-50 ">
                                        Anime for Genre {">"} {searchParams.genre}
                                    </h1>
                                </div>
                                <div className='w-full flex flex-wrap justify-around'>
                                    {
                                        data.results.map(e => {
                                            return <div style={{
                                                backgroundImage: `url(${e.image})`
                                            }} key={e.id} className='bg-cover bg-center bg-no-repeat m-2 rounded-md w-[300px] h-[150px]'>
                                                <div style={{
                                                    background: 'linear-gradient(to left, rgba(0, 0, 0, 1) , transparent )'
                                                }} className='w-full h-full rounded-md glassBg4 flex justify-around items-center'>
                                                    <div style={{
                                                        backgroundImage: `url(${e.image})`
                                                    }} className='w-[30%] h-[90%] p-1 rounded-md bg-center bg-cover'>

                                                    </div>
                                                    <div className='w-[60%] font-sans'>
                                                        <h3 className='text-[1rem] text-slate-300 font-semibold'>{truncateString(e.title.toString(), 20)}</h3>
                                                        <p>Release: <span className='font-semibold text-blue-600'>{e.released}</span></p>
                                                       <Wbutton id={e.id}/>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div> : <div className='w-full'>
                                <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between my-6">
                                    <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                                        Anime You may like
                                    </h1>
                                </div>
                                <div className='w-full flex flex-wrap justify-around'>
                                    {
                                        data.results.map(e => {
                                            return <div style={{
                                                backgroundImage: `url(${e.image})`
                                            }} key={e.id} className='bg-cover bg-center bg-no-repeat m-2 rounded-md w-[300px] h-[150px]'>
                                                <div style={{
                                                    background: 'linear-gradient(to left, rgba(0, 0, 0, 1) , transparent )'
                                                }} className='w-full h-full rounded-md glassBg4 flex justify-around items-center'>
                                                    <div style={{
                                                        backgroundImage: `url(${e.image})`
                                                    }} className='w-[30%] h-[90%] p-1 rounded-md bg-center bg-cover'>

                                                    </div>
                                                    <div className='w-[60%] font-sans'>
                                                        <h3 className='text-[1rem] text-slate-300 font-semibold'>{truncateString(e.title.toString(), 20)}</h3>
                                                        <p>Release: <span className='font-semibold text-blue-600'>{e.released}</span></p>
                                                        <Wbutton id={e.id}/>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Genres