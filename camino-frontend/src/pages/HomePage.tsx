import React from "react";
import ShellImg from '../assets/camino-shell-removebg.png'


const HomePage = (): JSX.Element => {
    return (
        <div className="h-[calc(100vh_-_9rem)] flex flex-col">


            <div className="h-4/6 md:min-h-96 bg-gradient-to-r from-yellow to-lightYellow  md:basis-1/2  flex  flex-col md:flex-row justify-center items-center mt-20 md:mt-28">


                <div className="md:h-72 md:mr-10 md:my-8">
                    <img src={ShellImg} alt="Camino de Santiago shell" className="h-44 pb-6 md:h-64 md:p-2" data-cy="logo"/>
                </div>



                    <p data-cy="title" className="text-2xl md:text-5xl leading-normal md:leading-relaxed  font-regular uppercase">A free API for <span className="text-blue block"><a href="http://www.gronze.com" target="_blank" className='hover:underline'>Camino de Santiago</a></span> albergue JSON data</p>



            </div>
        </div>
    )
};

export default HomePage;

