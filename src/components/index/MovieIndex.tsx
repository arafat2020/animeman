import { AnimeMovie } from "@/app/(home)/movie/page"
import Gogoanime from "@consumet/extensions/dist/providers/anime/gogoanime"

const getInfo = async (id: string) => {
    const data = await new Gogoanime().fetchAnimeInfo(id)
    return data
}

async function MovieIndex({ obj }: { obj: AnimeMovie[] }) {
    const data = await getInfo(obj[Math.floor(Math.random() * obj.length)].animeId)
    console.log(data);

    return (
        <div className="w-full">

        </div>
    )
}

export default MovieIndex