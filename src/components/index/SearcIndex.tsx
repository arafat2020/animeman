import React from 'react'
import Card3 from '../card/Card3'
import { IAnimeResult, ISearch } from '@consumet/extensions'
import Card4 from '../card/Card4'

type SearchIndexProps = {
    searchres: unknown,
    topairres: unknown,
    q: string
}
function SearcIndex({ q, searchres, topairres }: SearchIndexProps) {
    const searchData = searchres as ISearch<IAnimeResult>
    const topairDta = topairres as ISearch<IAnimeResult>
    return (
        <div className='w-screen sm:w-full h-full flex flex-col sm:flex-row justify-around mt-6'>
            <div className='w-full sm:w-[63%]'>
                <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between">
                    <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                        Search Reasult for {'>'} {q} {'>'}
                    </h1>

                </div>
                <div className='w-full mt-6 flex flex-wrap justify-around'>
                    {
                        searchData.results.map(e => {
                            return <Card3 key={e.animeId} obj={e} />
                        })
                    }
                </div>
            </div>
            <div className='w-full sm:w-[32%]'>
                <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between">
                    <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
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

export default SearcIndex