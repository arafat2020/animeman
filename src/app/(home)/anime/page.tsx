import FinishLoad from '@/components/FinishLoad'
import AnimeIndex from '@/components/index/AnimeIndex'
import Gogoanime from '@consumet/extensions/dist/providers/anime/gogoanime'
import React from 'react'

const gga = new Gogoanime()
const getAnimeDetails = async (id: string) => {
  const data = await gga.fetchAnimeInfo(id)
  return data
}
const getTopAiring = async () => {
  const res = await gga.fetchTopAiring()
  return res
}

async function Anime({ searchParams }: { searchParams: { id: string } }) {
  const [data,data_2] = await Promise.all([getAnimeDetails(searchParams.id),getTopAiring()])
  
  return (
    <div className='w-full'>
      <FinishLoad />
      <AnimeIndex animeId={searchParams.id} animeDat={data} topairres={data_2}/>
    </div>
  )
}

export default Anime