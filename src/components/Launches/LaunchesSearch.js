import { useEffect, useState } from 'react';
import axios from 'axios';


const LaunchesSearch = (query, pageNumber) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [launches, setLaunches] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLaunches([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://api.spacexdata.com/v3/launches',
            params: {q: query},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLaunches(prevLaunches => {
                return [...new Set([...prevLaunches, ...res.data.map(b => b)])]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query])

    return { loading, error, launches, hasMore }


}


export default LaunchesSearch;