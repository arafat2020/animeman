"use client"

import { useProgress } from "@/providers/LoderProgressProvider"
import { Fragment, useEffect } from "react"

function FinishLoad({trigger}:{trigger?:unknown}) {
    const {finfishProfress} = useProgress()
    useEffect(()=>{
        finfishProfress()
    },[trigger])
  return (
    <Fragment/>
  )
}

export default FinishLoad