import React from "react";
import DocInfo from "../components/DocInfo";



const ApiPage = (): JSX.Element => {


    return (
        <div className="min-h-[calc(100vh_-_5rem)] flex flex-col items-center">

            <div  className="pb-20 w-10/12 bg-bg-yellow text-left">

                <h1 className="pt-16 pb-4 pl-8 font-accent text-3xl tracking-wider">API Documentation</h1>

                <div>
                    <DocInfo url={'http://localhost:5000/api/albergue/6365077ba799d6876d1cf9b5'} title={'Single Albergue'} description={'Get a single albergue based on albergue ID parameter.'} />
                </div>

                <div>
                    <DocInfo url={'http://localhost:5000/api/albergues'} title={'First 10 Albergues'} description={'Get the first 10 albergues in the database.'} />
                </div>
                <div>
                    <DocInfo url={'http://localhost:5000/api/albergues?page=2'} title={'Albergues by Page'} description={'The offset/page of albergues.'} />
                </div>

                <div>
                    <DocInfo url={'http://localhost:5000/api/albergues?count=20'} title={'Albergue count'} description={'The number of albergues to return per call. The default is 10 and the maximum is 50.'} />
                </div>
                <div>
                    <DocInfo url={'http://localhost:5000/api/albergues?camino=fisterra-y-muxia'} title={'Albergues by Camino'} description={'Get the first 10 albergues based on camimo parameter. Options: camino-frances, camino-primitivo, camino-portugues, camino-del-norte, via-de-la-plata, fisterra-y-muxia.'} />
                </div>
                <div>
                    <DocInfo url={'http://localhost:5000/api/albergues?page=3&count=15&camino=camino-primitivo'} title={'Full Example'} description={'Get page 3 of albergues on the Camino Primitivo with 15 albergues per page.'} />
                </div>

            </div>
        </div>
    )
}

export default ApiPage;
