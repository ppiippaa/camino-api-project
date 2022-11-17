import React from 'react';
import ShellImg from "../assets/camino-shell-removebg.png";

const NotFountPage = (): JSX.Element => {
    return (
        <div className="h-[calc(100vh_-_9rem)] flex flex-col items-center">
            <div className="md:pb-20 w-10/12 h-full bg-bg-yellow flex flex-col items-center justify-center">
                <h1 className="text-blue font-code text-3xl md:text-5xl" data-cy='notFound'>Page not found</h1>
                <div className="h-36 md:h-44  mt-12 md:mt-0 md:pt-12">
                    <img src={ShellImg} alt="Camino de Santiago shell" className="h-full" data-cy='shellLogo'/>
                </div>
            </div>
        </div>
    )
}

export default NotFountPage