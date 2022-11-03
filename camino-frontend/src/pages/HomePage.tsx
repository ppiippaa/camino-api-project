import React from "react";
import ShellImg from '../assets/camino-shell-removebg.png'


const HomePage = (): JSX.Element => {
    return (
        <div className="h-[calc(100vh_-_9rem)] flex flex-col">
            <div className="basis-1/4 flex justify-center items-center">
                <h1 className=" font-accent text-3xl tracking-wider">Albergue API</h1>
            </div>



            <div className="w-full min-h-96 bg-gradient-to-r from-yellow to-lightYellow  basis-1/2 flex flex-row justify-center items-center">
                <div className="h-72 mr-10 my-8">
                    <img src={ShellImg} alt="Camino de Santiago shell" className="h-full"/>
                </div>
                <div>
                    <p className="text-5xl leading-normal font-regular uppercase">A free API for <span className="text-blue block"><a href="http://www.gronze.com" target="_blank" className='hover:underline'>Camino de Santiago</a> </span> albergue JSON data</p>
                </div>


            </div>
        </div>
    )
};

export default HomePage;

