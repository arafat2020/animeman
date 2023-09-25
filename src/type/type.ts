export interface TopAnimeResponseType {
    currentPage: number;
    hasNextPage: boolean;
    results: ResultTopAnime[];
}

export interface ResultTopAnime {
    genres: string[];
    id: string;
    image: string;
    title: string;
    url: string;
}
export interface PupularAnimeType {
    animeId: string;
    animeImg: string;
    animeTitle: string;
    animeUrl: string;
    releasedDate: string;
}
export interface RecentAnimeType {
    animeId: string;
    animeImg: string;
    animeTitle: string;
    episodeId: string;
    episodeNum: string;
    episodeUrl: string;
    subOrDub: SubOrDub;
}

export enum SubOrDub {
    Sub = "SUB",
    Dub = "DUB"
}

export interface AnimeSearchReasult {
    animeId:    string;
    animeImg:   string;
    animeTitle: string;
    animeUrl:   string;
    status:     string;
   }
   
   
   


