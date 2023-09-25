import React from 'react'
import Watch from '../Watch'
import { IAnimeInfo, ISource } from '@consumet/extensions'
import Episodes from '../Episodes'
type WatchProps = {
  data_1: unknown,
  data_2: unknown,
  epID: string,
  animeId: string
}
function WatchIndex({ data_1, data_2, epID, animeId }: WatchProps) {
  const data = data_1 as ISource
  const data2 = data_2 as IAnimeInfo
  // console.log(data);

  return (
    <div className='w-full flex flex-col sm:flex-row justify-around'>
      <Watch title={data2.title.toString()} refer={`${data.headers?.Referer}`} url={data.sources} poster={`${data2.image?.toString()}`} />
      <Episodes animeId={animeId} episodeID={epID} info={data2} />
    </div>
  )
}

export default WatchIndex