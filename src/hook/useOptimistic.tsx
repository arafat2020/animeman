import { useState } from "react"

function useOptimistic({ defaultValue }: { defaultValue: unknown }) {
    const [expected, setexpected] = useState<unknown>(defaultValue)
    const [backup,setBackup]=useState<unknown>(defaultValue)
    function onError() {
        setexpected(backup)
    }
    function onSuccess() {
        setBackup(expected)
    }
    return {
        expected,
        setexpected,
        onError,
        onSuccess
    }
}

export default useOptimistic