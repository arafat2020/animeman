import { ReactType } from "@prisma/client";
import axios from "axios";

export function reactToAnime({
    type,
    animeId,
    episodeId,
    onError,
    onSuccess
}: {
    type: ReactType|null
    animeId: string,
    episodeId: string,
    onError: () => void,
    onSuccess: () => void,
}) {
    axios.get(`/api/react?type=${type}&id=${animeId}&epId=${episodeId}`)
    .then(res=>console.log(res)
    )
    .catch(err=>console.log(err)
    )
}