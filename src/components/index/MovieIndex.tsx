import { AnimeMovie } from "@/app/(home)/movie/page"
import { truncateString } from "@/lib/lib"
import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime"

const getInfo = async (id: string) => {
    const data = await new Gogoanime().fetchAnimeInfo(id)
    return data
}

async function MovieIndex({ obj }: { obj: AnimeMovie[] }) {
    const data = await getInfo(obj[Math.floor(Math.random() * obj.length)].animeId)

    return (
        <div className="w-screen sm:w-full">
            <div style={{
                backgroundImage: `url(${data.image})`
            }} className="w-full sm:h-[350px] my-5 rounded-md bg-left bg-no-repeat bg-cover">
                <div style={{
                    background: 'linear-gradient(to left, rgba(0, 0, 0, 1) , transparent )'
                }} className="w-full h-full rounded-md glassBg4 flex flex-col sm:flex-row justify-around items-center">
                    <div style={{
                        backgroundImage: `url(${data.image})`
                    }} className="w-[55%] sm:w-[37%] h-[200px] sm:h-[85%] bg-center bg-no-repeat bg-cover rounded-md m-2 sm:m-0">
                        <div
                            style={{
                                background: 'linear-gradient(to top, rgba(0, 0, 0, .7) , transparent )'
                            }}
                            className="w-full h-full rounded-md relative">
                            <div className="w-full p-2 absolute bottom-0 left-0">
                                <h2 className="font-sans font-semibold text-2xl text-slate-200">{truncateString(data.title.toString(), 25)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-[95%] sm:w-[57%] font-sans">
                        <p className='text-xl font-sans mt-2'>
                            <span className='font-extrabold italic text-zinc-300'>Other Name:</span>
                            {" "}
                            <span className='text-blue-600 font-bold'>{truncateString(data.otherName, 35)}</span>
                        </p>
                        <p className='text-sm font-sans mt-2'>
                            <span className='font-extrabold italic text-blue-600'>Description:</span>
                            {" "}
                            <span className='text-zinc-200'>{truncateString(`${data.description}`, 400)}</span>
                        </p>
                        <p className='text-sm font-sans mt-1'>
                            <span className='font-extrabold italic text-zinc-200'>Type:</span>
                            {" "}
                            <span className='text-blue-600'>{data.type}</span>
                        </p>
                        <p className='text-sm font-sans mt-1'>
                            <span className='font-extrabold italic text-zinc-200'>Release:</span>
                            {" "}
                            <span className='text-blue-600'>{data.releaseDate}</span>
                        </p>
                        <p className='text-sm font-sans mt-1'>
                            <span className='font-extrabold italic text-zinc-200'>Type:</span>
                            {" "}
                            <span className='text-blue-600'>{data.subOrDub}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between my-2">
                    <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                        Anime {'>'} Movies
                    </h1>
                </div>
                <div className="w-full flex flex-col sm:flex-row flex-wrap justify-around items-center">
                    {
                        obj.map(e => {
                            return <div style={{
                                backgroundImage: `url(${e.animeImg})`
                            }} key={e.animeId} className="w-[300px] h-[500px] bg-center bg-cover bg-no-repeat rounded-md my-2">
                                <div style={{
                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1) , transparent )'
                                }} className="w-full h-full rounded-md glassBg4 flex flex-col justify-around items-center">
                                    <div style={{
                                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, .7) , transparent )'
                                    }} className="w-[45%] h-[35%] rounded-md p-2">
                                        <div style={{
                                            backgroundImage: `url(${e.animeImg})`
                                        }} className="w-full h-full bg-no-repeat bg-center bg-cover rounded-md">

                                        </div>
                                    </div>
                                    <div className="w-full h-[55%] p-2 font-sans text-center">
                                        <h3 className="text-xl text-slate-200 font-semibold">{e.animeTitle}</h3>
                                        <p className="font-semibold"><span className="text-slate-200">Release: </span><span className="text-blue-500">{e.releasedDate}</span></p>
                                        <button className="p-2 glassBg4 rounded-sm font-sans font-semibold mt-5">
                                            Watch
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieIndex