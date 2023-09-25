import React, { useEffect, useState } from 'react'
import axios from 'axios'

type UseFetch = {
    url: string,
    type: 'POST' | 'GET'
    userID?: string
}

function useFetch({url,type,userID}:UseFetch) {
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [err, seterr] = useState(null);
    const [res, setRes] = useState<unknown>();
    useEffect(() => {
        setisLoading(true)
        if (type === "GET") {
            axios.get(url)
            .then(data =>setRes(data.data))
            .catch(err=>seterr(err))
            .finally(()=>setisLoading(false))
        }
    }, [])
    return {
        isLoading, err, res
    }
}

export default useFetch