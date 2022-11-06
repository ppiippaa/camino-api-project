import React from "react";
import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg';
import Gallery3 from '../assets/gallery3.jpg';
import Gallery4 from '../assets/gallery4.jpg';



const AboutPage = (): JSX.Element => {

    return (
        <div className="min-h-screen flex flex-col items-center " >
            <div className="min-h-96 w-10/12 bg-bg-yellow flex flex-col justify-center items-center" >

                <h1 className="pt-16 pb-10 font-accent text-3xl tracking-wider">About</h1>

                <div className="w-3/4 pb-6">
                    <p>Access over to 4000 records of albergue information from the Camino Frances, Portuges, del Norte, Primitivo, Via de le Plata and Finisterra y Muxia.</p>
                </div>


                <p className="pb-6 px-2">Data from <a className="hover:text-blue font-bold" href="http://www.gronze.com">Gronze.com</a>.</p>
                <p className="pb-6 px-2">This project is not for commercial purposes, it was built for educative reasons.</p>
                <p className="pb-6 px-2">Technologies implemented:</p>

                <div className="flex flex-col justify-center items-center">
                    <ul className="pb-6 px-2 list-disc list-inside text-justify">
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Node/Express</li>
                        <li>React.js</li>
                        <li>Typescript</li>
                        <li>Tailwindcss</li>
                    </ul>
                </div>

                <div className="w-3/4 pb-6">
                    <p>An avid hiker, I completed my first Camino de Santiago (Camino Frances) in 2018. The Camino Frances takes approximately 5 weeks to walk and consists of an 800km route from Saint-Jean-Pied-du-Port in France to Santiago de Compostela in Spain. Since then I have walked the Camino Primitivo, sections of the Camino del Norte and the Camino de Gran Canaria.</p>

                </div>

                <div className="grid grid-cols-2 gap-8 pt-10 pb-20 ">
                    <figure className="pt-8 pb-4 pl-8">
                        <img src={Gallery1} alt="Saint-Jean-Pied-du-Port"/>
                        {/*<figcaption className="absolute bottom-0  w-[calc(100%_-_1rem)] bg-blue py-2 text-yellow"><h4>Saint-Jean-Pied-du-Port</h4></figcaption>*/}
                    </figure>
                    <figure className="pt-8 pb-4 pr-8">
                        <img src={Gallery2} alt="The Pyranees Mountains"/>
                        {/*<figcaption className="absolute bottom-0 w-[calc(100%_-_1rem)] py-2 bg-blue text-yellow" ><h4>The Pyranees Mountains</h4></figcaption>*/}
                    </figure>
                    <figure className="pb-8 pl-8">
                        <img src={Gallery3} alt="Road to Leon"/>
                        {/*<figcaption className="absolute bottom-0 w-[calc(100%_-_1rem)] py-2 bg-blue text-yellow">Road to Leon</figcaption>*/}
                    </figure>
                    <figure className="pb-8 pr-8">
                        <img src={Gallery4} alt="Road to Leon"/>
                        {/*<figcaption className="absolute bottom-0 w-[calc(100%_-_1rem)] py-2 bg-blue text-yellow">Road to Leon</figcaption>*/}
                    </figure>

                </div>
            </div>
        </div>
    )
}

export default AboutPage;
