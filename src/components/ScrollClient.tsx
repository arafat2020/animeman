"use client"

import React from "react"
import { ScrollArea } from "./ui/scroll-area"

function ScrollClient({children}:{children:React.ReactNode}) {
  return (
    <ScrollArea className="w-full h-full sm:container ">
        {children}
    </ScrollArea>
  )
}

export default ScrollClient