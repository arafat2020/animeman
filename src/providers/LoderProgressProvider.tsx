'use client'
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

// Define the type for your context data
interface LoderContextType {
  // Define your context properties here
  // For example:
  progress: number
  setProgress: Dispatch<SetStateAction<number>>
  loading: boolean,
  setloading:Dispatch<SetStateAction<boolean>>
}

// Create the initial context with default values
const LoderContext = createContext<LoderContextType | undefined>(undefined);

export function useProgress() {
  const ctx = useContext(LoderContext)
  function startPorgress() {
    ctx?.setProgress(25)
    ctx?.setloading(true)
  }
  function finfishProfress() {
    ctx?.setProgress(100)
  }
  return {
    startPorgress,
    finfishProfress,
    loading:ctx?.loading
  }
}

function LoderProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0)
  const [loading, setloading] = useState(false)
  function finish() {
    setProgress(0)
    setloading(false)
  }
  return (
    <div className='w-full h-full'>
      <LoderContext.Provider value={{
        progress,
        setProgress,
        loading,
        setloading
      }}>
        <LoadingBar
          color='blue'
          height={4}
          progress={progress}
          onLoaderFinished={() =>finish()}
        />
        {children}
      </LoderContext.Provider>
    </div>
  )
}

export default LoderProgressProvider