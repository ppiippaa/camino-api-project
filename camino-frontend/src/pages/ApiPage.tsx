import React from "react";
import DocInfo from "../components/DocInfo";



const ApiPage = (): JSX.Element => {


    return (
        <div className="h-[calc(100vh_-_5rem)]">
            <h1 className="py-7 font-accent text-3xl tracking-wider">API Documentation</h1>
            <div>
                <DocInfo url={'http://localhost:5000/api/albergue/6365077ba799d6876d1cf9b5'} title={'Single Albergue'} description={'lorem'} />
            </div>

        </div>
    )
}

export default ApiPage;
