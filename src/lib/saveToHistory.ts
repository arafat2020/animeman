
import axios from "axios";

export async function saveToHistory(animeId:string,episodeId:string) {
   const res = await axios.get(`/api/history/?animeId=${animeId}&episodeId=${episodeId}`)
   console.log(res);
    
}