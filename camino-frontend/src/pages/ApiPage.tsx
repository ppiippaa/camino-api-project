import DocInfo from "../components/DocInfo";
import '../components/DocInfo.css';

const ApiPage = (): JSX.Element => {

    return (
        <div className="min-h-[calc(100vh_-_5rem)] flex flex-col items-center md:items-left">
            <div className="pb-16 w-10/12 bg-bg-yellow text-center md:text-left">
                <h1 className="pt-16 pb-8 pl-8 font-accent text-3xl tracking-wider">APII Documentation</h1>
                <div className="info-container flex flex-col items-center justify-center md:justify-start" data-cy='requestContainer'>
                    <div className="w-full">
                        <DocInfo url={`${process.env.REACT_APP_BASE_URL}/api/albergue/636a3c49d09200844a57cb1a`} title={'Single Albergue'} description={'Get a single albergue based on albergue ID parameter.'} />
                    </div>
                    <div className="w-full">
                        <DocInfo url={`${process.env.REACT_APP_BASE_URL}/api/albergues`} title={'First 10 Albergues'} description={'Get the first 10 albergues in the database.'} />
                    </div>
                    <div className="w-full">
                        <DocInfo url={`${process.env.REACT_APP_BASE_URL}/api/albergues?page=2`} title={'Albergues by Page'} description={'The offset/page of albergues.'} />
                    </div>
                    <div className="w-full">
                        <DocInfo url={`${process.env.REACT_APP_BASE_URL}/api/albergues?count=20`} title={'Albergue count'} description={'The number of albergues to return per call. The default is 10 and the maximum is 50.'} />
                    </div>
                    <div className="w-full">
                        <DocInfo url={`${process.env.REACT_APP_BASE_URL}/api/albergues?camino=fisterra-y-muxia`} title={'Albergues by Camino'} description={'Get the first 10 albergues based on camimo parameter. Options: camino-frances, camino-primitivo, camino-portugues, camino-del-norte, via-de-la-plata, fisterra-y-muxia.'} />
                    </div>
                    <div className="over-flow w-full">
                        <DocInfo url={`${process.env.REACT_APP_BASE_URL}/api/albergues?page=3&count=15&camino=camino-primitivo`} title={'Full Example'} description={'Get page 3 of albergues on the Camino Primitivo with 15 albergues per page.'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApiPage;
