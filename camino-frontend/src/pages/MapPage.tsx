import React from 'react';
import Map from '../components/Map'
import useFetch from "../hooks/useFetch";
import {Albergue} from "../types/albergue";
import { isMobile } from 'react-device-detect'


const MapPage = (): JSX.Element => {
    const exampleUrl = 'http://localhost:5000/api/albergues?key=test';
    const  {loading, error, data}  = useFetch<Albergue[]>(exampleUrl)


    if (loading) {
        return (

            <div className="h-[calc(100vh_-_9rem)] flex flex-col items-center">
                <div className="pb-20 w-10/12 h-full bg-bg-yellow flex flex-col items-center">
                        <h1 className="pt-16 pb-8 text-3xl font-accent">Map</h1>
                        <h2 className="font-code font-bold text-lg pb-8 tracking-wider">Content loading...</h2>
                </div>
            </div>
        )
    }
    if (error || data === null) {
        return <h2>Error</h2>
    }

    return (
        <div className="h-[calc(100vh_-_9rem)] flex flex-col items-center">
            <div className="pb-20 w-10/12 h-full bg-bg-yellow flex flex-col items-center">
                <h1 className="pt-16 pb-8 text-3xl font-accent">Map</h1>
                { isMobile  && <div data-cy='mobileMessage'><h3 className='font-code'>Please switch to desktop for a better loading experience</h3></div>}
                <Map data={data.filter(d => d.coordinates)} data-cy='map'/>
            </div>
        </div>
    );
};

export default MapPage;
