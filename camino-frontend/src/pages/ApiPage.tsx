import React from "react";
import jsonDummyData from '../jsonViewTestData.json';
import ReactJson from 'react-json-view';



const ApiPage = (): JSX.Element => {

    return (
        <div className="h-[calc(100vh_-_5rem)]">
            <h1 className="py-7 font-accent text-3xl tracking-wider">API</h1>
            <div>
                <ReactJson src={jsonDummyData} theme={"pop"}/>
            </div>
        </div>
    )
}

export default ApiPage;
