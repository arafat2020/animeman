
import { truncateString } from "@/lib/lib";
import { ITitle } from "@consumet/extensions";
import Anilist from "@consumet/extensions/dist/providers/meta/anilist";

async function getPopularAnime() {
    const data = await new Anilist().fetchPopularAnime()
    return data
}

async function PupularAnime() {
    const data = await getPopularAnime()
    console.log(data);
    
    return (
        <div className="w-full">
            <div className="w-full bg-blue-500 rounded-md p-2 flex justify-between my-6">
                <h1 className="text-[1rem] font-bold font-sans text-zinc-50 ">
                    Pipular Anime for You
                </h1>

            </div>
            <div className="w-full flex flex-col justify-around items-center space-y-3">
                {
                    data.results.map(e => {
                        const titel = e.title as ITitle
                        return <div key={e.id} className='w-[90%] flex cursor-pointer glassBg2'>
                            <img src={e.image} className='w-[60px] h[90px] rounded-md' />
                            <div className='flex-1 ml-2 text-zinc-50 font-sans'>
                                <h4 className='font-md font-medium'>
                                    {truncateString(titel.english?titel.english:'NAN', 25)}
                                </h4>
                                <p className='text-sm'><span className='text-zinc-500 italic'> Release:</span>{" "} {e.releaseDate}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PupularAnime