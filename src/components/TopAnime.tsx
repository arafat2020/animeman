"use client"
import { TopAnimeResponseType } from '@/type/type'
import useFetch from '@/hook/useFetch'
import Card from './card/Card'
import { Fragment, memo } from 'react'
import Loader from './Loder/Loader'

const TopAnime = memo(({ home = false }: { home?: Boolean }) => {
    const { res, isLoading } = useFetch({
        url: '/api/topanime',
        type: 'GET'
    })
    const data = res as TopAnimeResponseType | undefined

    return (
        <Fragment>
            {
                home ? <div className="w-full bg-blue-500 rounded-md p-2 flex justify-between my-5">
                    <h1 className="text-xl font-bold font-sans text-zinc-50 ">
                        Hot and New
                    </h1>
                </div> : <div className='w-full sm:container text-zinc-100'>
                    <h3 className="scroll-m-20 text-3xl font-bold tracking-tight italic underline">
                        Top Airing
                    </h3>
                </div>
            }
            <div className='w-full sm:container flex justify-around items-center flex-wrap mt-4'>
                {isLoading ? <Loader length={9} /> : data?.results.map(e => {
                    return <Card key={e.id} obj={e} />
                })}

            </div>
        </Fragment>
    )
}
)
export default TopAnime