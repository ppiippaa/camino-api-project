import React, {useState} from 'react';
import useFetch from "../hooks/useFetch";
import ReactJson from "react-json-view";

type Props = {
    url: string;
    title: string;
    description: string;

}

const DocInfo = ({ url, title, description}: Props): JSX.Element => {

    const [ loading, error, data ] = useFetch(url);
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleExampleView = () => {
        setIsOpen((prevValue) => !prevValue)
    }
    if (loading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className='bg-blue' onClick={toggleExampleView}>Show example</button>
            {isOpen && <ReactJson src={data} theme={'pop'}/>}
        </div>
    );
};

export default DocInfo;