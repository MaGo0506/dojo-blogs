import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null),
        [isPending, setIsPending] = useState(true),
        [error, setError] = useState(null)


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
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
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false)
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url])

    return {
        data,
        isPending,
        error
    }
}