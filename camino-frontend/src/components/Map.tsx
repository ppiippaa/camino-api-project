import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";


const Map = (): JSX.Element => {
    const {} = useLoadScript({googleMapsApiKey: ''})
    return (
        <div></div>
    )
}

export default Map;