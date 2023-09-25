import { getRandomIndexOrobj, truncateString } from '@/lib/lib';
import Gogoanime from '@consumet/extensions/dist/providers/anime/gogoanime';
import { InfoIcon } from 'lucide-react';
const getRecomenDationByGenres = async (params: string) => {
    const data = await new Gogoanime().fetchGenreInfo(params)
    return data
}
async function RecomendedAnime({ genres }: { genres: string[] | undefined }) {
    try {
        const randomGn = await getRandomIndexOrobj(genres === undefined ? [] : genres)?.randomObj
        const data = randomGn ? await getRecomenDationByGenres(`${randomGn}`) : null
        // console.log(data);

        return (
            <div className='w-full flex flex-wrap justify-around'>
                {
                    data?.results.map(e => {
                        return <div style={{
                            backgroundImage: `url(${e.image})`
                        }} key={e.id} className='w-[175px] h-[225px] cursor-pointer rounded-md relative bg-no-repeat bg-center m-3'>
                            <div className='w-full glassBg rounded-b-md rounded-t-none bottom-0 left-0 absolute'>
                                <h6 className='text-[1rem] font-sans font-bold text-zinc-50 ml-2'>{truncateString(e.title.toString(), 15)}</h6>
                                <p className='text-[.7rem] font-sans '>
                                    <span className='font-extrabold italic text-zinc-50 ml-2'>Release:</span>
                                    {" "}
                                    <span className='text-blue-600 font-bold'>{e.released}</span>
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    } catch (error) {
        return (
            <div className='w-full p-1 bg-red-500 rounded-md flex items-center space-x-2 mb-6'>
                <InfoIcon/>
                <div className='flex-1'>
                    {`${error}`}
                    <p className='text-sm'>This site is currently on beta,trying to fix bugs</p>
                </div>
            </div>
        )
    }
}

export default RecomendedAnime