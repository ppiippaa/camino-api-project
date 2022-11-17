import React, {useState} from 'react';
import useFetch from "../hooks/useFetch";
import ReactJson from "react-json-view";
import {Albergue} from "../types/albergue";


type Props = {
    url: string;
    title: string;
    description: string;

}

const DocInfo = ({ url, title, description}: Props): JSX.Element => {

    const { loading, error, data } = useFetch<Albergue | Albergue[]>(url);
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleExampleView = () => {
        setIsOpen((prevValue) => !prevValue)
    }
    if (loading) {
        return (
            <div className="pt-6 pb-6 pl-8">
                <h2 className="font-code font-bold text-lg pb-8 tracking-wider">Content loading...</h2>
                <hr className="border-t-2 border-lightGrey w-9/12 rounded "/>
            </div>
        )
    }
    if (error || data === null) {
        return (
            <div className="pt-6 pb-6 pl-8">
                <h2 className="font-code font-bold text-lg pb-8 tracking-wider">An error occurred, please try again.</h2>
                <hr className="border-t-2 border-lightGrey w-9/12 rounded "/>
            </div>
        )
    }


    return (
        <div className="py-6 pl-6-4 md:w-4/5 md:pl-8 flex flex-col items-center justify-evenly md:items-start w-full" data-cy='docInfo'>


            <h2 className="font-code font-bold text-xl pb-8 tracking-wider">{title}</h2>


            <p className="pb-6 px-4 w-prose md:px-0 ">{description}</p>


            <button className='bg-blue text-yellow p-2 rounded mt-2 mb-6' onClick={toggleExampleView}>{isOpen ? 'Hide' : 'Show'} example</button>

            {isOpen && <div className="w-4/5 md:pr-8 pt-3 pb-3 bg-codeSnippetBlack rounded md:my-2"><ReactJson src={data} theme={'brewer'} collapseStringsAfterLength={4} collapsed={true}/></div>}

            <pre className="mt-10 mb-12 py-2 px-4 bg-grey break-all rounded text-yellow text-sm md:text-base md:w-fit display-inline overflow-x-scroll md:overflow-hidden w-10/12">{url}</pre>

            <hr className="border-t-2 border-lightGrey  w-72 md:w-9/12 rounded"/>


        </div>
    );
};

export default DocInfo;