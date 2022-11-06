import {useEffect, useState} from "react";


const useFetch = (url: string) => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ data, setData ] = useState<any>({});


    useEffect( () => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const res = await fetch(url)
                console.log(url)
                if (res.status !== 200) {
                    setLoading(false);
                    setError(true);
                    return;
                }
                const data = await res.json();
                setData(data)
            } catch {
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [url])

    return [loading, error, data];
}

export default useFetch;