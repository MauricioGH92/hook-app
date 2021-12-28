import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const initialState = {data:null, loading:true, error:null};
    const [state, setstate] = useState(initialState)

    useEffect(() => {
        setstate(initialState)
        fetch(url)
            .then((resp) => resp.json() )
            .then((data) => {
                setstate({
                    loading:false,
                    error:null,
                    data
                })
            }
            )
    }, [url])

    return state;
}
