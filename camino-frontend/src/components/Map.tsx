import {GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import {Albergue} from "../types/albergue";
import React, {useState} from "react";
import InfoBox from "./InfoBox";

type Props = {
    data: Albergue[];
}


const Map = ( { data }: Props ): JSX.Element => {
    // @ts-ignore
    const mapApiKey = process.env.REACT_APP_GOOGLE_KEY.toString();


    const {isLoaded} = useLoadScript({googleMapsApiKey: mapApiKey})
    const [ selectedAlbergue, setSelectedAlbergue ] = useState<Albergue | null>(null);

    if (!isLoaded) {
        return (
            <div className="pt-2 pb-6 pl-8">
                <h2 className="font-code font-bold text-lg pb-10 tracking-wider">Content loading...</h2>
            </div>
        )
    }



    return (
        <GoogleMap
            zoom={5}
            center={{lat: 42.605556, lng: -5.570000}}
            mapContainerClassName="h-5/6 w-5/6"
            data-cy='googleMap'
        >
                {
                    // @ts-ignore
                    data.map((d) =>
                        <MarkerF
                            key={d.id}
                            position={{ lat: parseFloat(d.coordinates?.lat as string), lng: parseFloat(d.coordinates?.long as string)}}
                            onClick={() => {
                                setSelectedAlbergue(d)
                            }}
                            data-cy='marker'
                            // icon={selectedAlbergue !== null && selectedAlbergue.id === d.id ? 'http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png' : 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png'}
                        />
                    )
                }
                {
                    selectedAlbergue && (
                       <InfoBox albergue={selectedAlbergue} onClose={() => setSelectedAlbergue(null)} />
                    )
                }
        </GoogleMap>
    )
}


export default Map;