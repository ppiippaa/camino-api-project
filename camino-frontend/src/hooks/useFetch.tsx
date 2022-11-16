import {useEffect, useState} from "react";


const useFetch = <T extends any>(url: string) => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<boolean>(false);
    const [ data, setData ] = useState<T | null>(null);


    useEffect( () => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const res = await fetch(url)
                if (res.status !== 200) {
                    setLoading(false);
                    setError(true);
                    return;
                }
                const data = await res.json();
                setData(data)
            } catch (err){
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [url])

    return {loading, error, data};
}

export default useFetch;