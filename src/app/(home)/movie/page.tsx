import FinishLoad from '@/components/FinishLoad'
import MovieIndex from '@/components/index/MovieIndex'
import axios from 'axios'
import React from 'react'

const movie = async () => {
    const data = await axios.get('https://ggmirror.vercel.app/anime-movies')
    return data.data
}

export interface AnimeMovie {
    animeId: string;
    animeImg: string;
    animeTitle: string;
    animeUrl: string;
    releasedDate: string;
}
0
async function page() {
    const data = await movie() as AnimeMovie[]
    return (
        <div className='w-screen sm:w-full'>
            <FinishLoad />
            <MovieIndex obj={data} />
        </div>
    )
}

export default page