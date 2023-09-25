import FinishLoad from '@/components/FinishLoad'
import SearcIndex from '@/components/index/SearcIndex'
import { ANIME } from '@consumet/extensions'
import axios from 'axios'
import React from 'react'
const gga = new ANIME.Gogoanime()

const getSearchReasutl = async (term: string, page?: number) => {
  const res = await gga.search(term, page ? page : 1)
  return res
}
const getTopAiring = async () => {
  const res = await gga.fetchTopAiring()
  return res
}

async function Search({ searchParams }: { searchParams: { q: string } }) {

  const [searchRes, getTopAiringRes] = await Promise.all([getSearchReasutl(searchParams.q), getTopAiring()])

  return (
    <div>
      <FinishLoad trigger={searchParams.q}/>
      <SearcIndex q={searchParams.q} searchres={searchRes} topairres={getTopAiringRes} />
    </div>
  )
}

export default Search