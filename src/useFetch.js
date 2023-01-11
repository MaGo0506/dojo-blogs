import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null),
        [isPending, setIsPending] = useState(true),
        [error, setError] = useState(null)


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message);
            })
    }, [url]);

    return {
        data,
        isPending,
        error
    }
}