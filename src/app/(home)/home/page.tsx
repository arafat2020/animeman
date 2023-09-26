import FinishLoad from '@/components/FinishLoad'
import RecentEpisode from '@/components/RecentEpisode'
import Slider2 from '@/components/Slider2'
import TopAnime from '@/components/TopAnime'
import axios from 'axios'
import React from 'react'
const getPoularAnime = async (page:number=1,type:number=2) => {
  const data = await axios.get(`https://gogo-anime-exbbfz3to-arafat2020.vercel.app/popular/?type=${type}&page=${page}`)
  return data.data
}
const getRecentEpisod = async () => {
  const data = await axios.get('https://gogo-anime-exbbfz3to-arafat2020.vercel.app/recent-release')
  return data.data
}
async function Home({ searchParams }: { searchParams: { page: string|undefined } }) {
  const [data_one, data_tow]: {}[] = await Promise.all([getPoularAnime(), getRecentEpisod()])


  return (
    <div className='w-full '>
      <FinishLoad trigger={searchParams.page}/>
      <Slider2 obj={data_one} />
      <div className='w-full flex flex-col sm:flex-row justify-between'>
        <div className='w-screen sm:w-[63%]'>
          <RecentEpisode page={searchParams.page} obj={data_tow} />
        </div>
        <div className='w-screen sm:w-[33%]'>
          <TopAnime home />
        </div>
      </div>
    </div>
  )
}

export default Home