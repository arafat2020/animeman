"use client"

import { truncateString } from "@/lib/lib"
import { Fragment, useEffect, useState } from "react";
import { Player, Video, DefaultUi, Hls, } from '@vime/react';
import '@vime/core/themes/default.css';
import { IAnimeInfo, IVideo } from "@consumet/extensions";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import VideoBottom from "./VideoBottom";

function Watch({ url, refer, poster, title, obj, episodeId, animeId }: { refer: string, url: IVideo[], poster: string, title: string, obj: IAnimeInfo, episodeId: string, animeId: string }) {
    const [src, setSrc] = useState<string | null>(null)
    const [index, setindex] = useState<number>(0)
    useEffect(() => {
        (async () => {
            setSrc(null)
            const options = {
                headers: {
                    Referer: refer,
                },
            };
            const res = await fetch(url[index].url, options)
            setSrc(res.url)

        })()
    }, [index, url])

    return (
        <div className="w-full sm:w-[63%] h-auto sm:h-[320px]">
            <div className="w-full bg-blue-500 sm:rounded-md p-2 flex justify-between items-center mb-6">
                <h1 className="text-[1rem] sm:text-xl font-bold font-sans text-zinc-50 ">
                    Anime {'>'} {truncateString(title, 25)}
                </h1>
                <div className="w-[20%]">
                    <Select onValueChange={e => setindex(parseInt(e))} defaultValue="0">
                        <SelectTrigger className="bg-transparent text-zinc-50 font-medium font-sans">
                            <SelectValue placeholder='Select a Resolution' />
                        </SelectTrigger>
                        <SelectContent className="bg-blue-500 text-zinc-50 font-sans font-medium">
                            <SelectGroup>
                                <SelectLabel>
                                    Resolution
                                </SelectLabel>
                                {
                                    url.map((e, i) => {
                                        return <SelectItem key={e.quality} value={`${i}`}>{e.quality}</SelectItem>
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {src ?
                <Fragment>
                    <Player>
                        {src && src.includes('m3u8') ? (
                            <Hls version="latest" poster={poster} key={src}>
                                <source data-src={src} type="application/x-mpegURL" />
                            </Hls>
                        ) : (
                            <Video poster={poster} key={src}>
                                <source data-src={src} type="video/mp4" />
                            </Video>
                        )}


                        {/* We've replaced the `<Ui />` component. */}
                        {/* We can turn off any features we don't want via properties. */}
                        <DefaultUi noClickToPlay />

                    </Player>
                    <VideoBottom episodeId={episodeId} obj={obj} animeId={animeId} />
                </Fragment> : <div className="w-full h-full flex justify-around items-center">
                    <div>
                        <Loader2 className="w-[80px] h-[80px] animate-spin text-zinc-600" />
                        <h6 className="font-sans  font-semibold text-zinc-600">Loading....</h6>
                    </div>
                </div>
            }
        </div>
    )
}

export default Watch