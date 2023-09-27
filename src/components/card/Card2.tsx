import { truncateString } from "@/lib/lib"
import { RecentAnimeType } from "@/type/type"
import { Button } from "../ui/button"
import { useProgress } from "@/providers/LoderProgressProvider"
import { useRouter } from "next/navigation"

function Card2({ obj, sub }: { obj: RecentAnimeType, sub: boolean }) {
    const { startPorgress, loading } = useProgress()
    const router = useRouter()
    function GoToAnime() {
        startPorgress()
        router.push(`/anime?id=${obj.animeId}`)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${obj.animeImg})`
            }}
            className="w-[310px] sm:w-[340px] h-[200px] sm:h-[200px] rounded-md m-3  flex text-blue-100 bg-no-repeat bg-center bg-cover">
            <div style={{
                background: 'linear-gradient(to left, rgba(0, 0, 0, 1) , transparent )'
            }} className="w-full h-full glassBg rounded-md p-[10px] flex">
                <div
                style={{
                    background: 'linear-gradient(to right, rgba(0, 0, 0, .5) , transparent )'
                }}
                 className="h-full w-[40%] p-2 rounded-md">
                    <img src={obj.animeImg} className="w-full h-full rounded-md" />
                </div>
                <div className="flex-1 h-full text-zinc-50 pl-3">
                    <h4 className="text-lg font-semibold font-sans ">
                        {truncateString(obj.animeTitle, 20)}
                    </h4>
                    <div className="flex font-sans space-x-3">
                        <p className="italic">Type</p>
                        <p className="bg-zinc-600 rounded-md font-semibold px-1">{sub ? "Sub" : "Dun"}</p>
                    </div>
                    <div className="flex font-sans space-x-3">
                        <p className="italic">Total Episods</p>
                        <p className="bg-zinc-600 rounded-md font-semibold px-1">{obj.episodeNum}</p>
                    </div>
                    <Button disabled={loading} onClick={() => GoToAnime()} variant="outline" className="glassBg ">
                        Watch
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card2