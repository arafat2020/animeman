import React, { Fragment } from "react";
import { Skeleton } from "../ui/skeleton";

export function LoaderCar() {
  return <div className="w-[290px] sm:w-[380px] h-[230px] glassBg2 m-3 p-[10px] flex text-zinc-100">
    <Skeleton className="w-3/6 h-full rounded-md bg-slate-400 opacity-40"/>
    <div className="w-3/6 space-y-2 ">
      <Skeleton className="w-3/4 h-[20px] ml-1 bg-slate-400 opacity-40"/>
      <Skeleton className="w-2/4 h-[15px] ml-1 bg-slate-400 opacity-40"/>
      <Skeleton className="w-2/4 h-[15px] ml-1 bg-slate-400 opacity-40"/>
    </div>
  </div>;
}

function Loader({length}:{length:number}) {
  const pseudoArray = Array.from({ length });
  return <Fragment>
    {pseudoArray.map((e,i)=>{
      return <LoaderCar key={i}/>
    })}
  </Fragment>;
}

export default Loader;
