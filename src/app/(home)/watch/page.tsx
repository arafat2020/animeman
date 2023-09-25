import FinishLoad from '@/components/FinishLoad'
import WatchIndex from '@/components/index/WatchIndex'
import Gogoanime from '@consumet/extensions/dist/providers/anime/gogoanime'
import React from 'react'
const getEpisodInfo = async (id: string) => {
    const data = await new Gogoanime().fetchEpisodeSources(id)
    return data
}
const getANimeIng =async (id:string) => {
    const data = await new Gogoanime().fetchAnimeInfo(id)
    return data
}
async function Watch({ searchParams }: { searchParams: { w: string, id: string } }) {
    const [data_1,data_2] = await Promise.all([getEpisodInfo(searchParams.w),getANimeIng(searchParams.id)])
    return (
        <div className='w-full h-full flex justify-around mt-6'>
            <FinishLoad trigger={searchParams.w}/>
           <WatchIndex animeId={searchParams.id} epID={searchParams.w} data_1={data_1} data_2={data_2}/>
        </div>
    )
}

export default Watch