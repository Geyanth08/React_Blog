import {useEffect, useState} from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{

        const aborteffect = new AbortController();

        fetch(url ,{signal : aborteffect.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data');
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            setIsPending(false);
            setError(err.message);
        })

        return ()=> aborteffect.abort();
    },[url])

    return {data,isPending,error};
}

export default useFetch;