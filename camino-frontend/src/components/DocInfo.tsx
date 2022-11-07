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
    console.log(data)
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleExampleView = () => {
        setIsOpen((prevValue) => !prevValue)
    }
    if (loading) {
        return <h2>Loading content...</h2>
    }
    if (error) {
        return <h2>Error</h2>
    }

    return (
        <div className="pt-6 pb-4 pl-8">
            <h2 className="font-code font-bold text-xl pb-4 tracking-wider">{title}</h2>
            <p className="pb-6">{description}</p>
            <button className='bg-blue text-yellow p-2 rounded' onClick={toggleExampleView}>{isOpen ? 'Hide' : 'Show'} example</button>
            {isOpen && <div className="pr-8 pt-6"><ReactJson src={data} theme={'brewer'}/></div>}
            <pre className="mt-6 mb-8 p-2 bg-grey rounded text-yellow w-fit display-inline">{url}</pre>
            <hr className="border-t-2 border-lightGrey w-10/12 rounded "/>
        </div>
    );
};

export default DocInfo;