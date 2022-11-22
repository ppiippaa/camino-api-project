import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg';
import Gallery3 from '../assets/gallery3.jpg';
import Gallery4 from '../assets/gallery4.jpg';

const AboutPage = (): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-col items-center " >
            <div className="h-auto w-10/12 bg-bg-yellow flex flex-col justify-center items-center leading-7 text-justify md:text-center" >

                <h1 className="pt-16 pb-10 font-accent text-3xl tracking-wider">About</h1>

                <div className="w-3/4 pb-6">
                    <p>Access over to 2000 records of albergue information from the Camino Francés, Camino Primitivo, Camino Portugués, Camino del Norte, Vía de la Plata and Fisterra y Muxía.</p>
                </div>

                <p className="pb-6 px-2 w-3/4">Data from <a data-cy="gronzeLink" className="hover:text-blue font-bold" href="http://www.gronze.com">Gronze.com</a>.</p>
                <p className="pb-6 px-2 w-3/4">This project is not for commercial purposes, it was built for educative reasons.</p>
                <p className="pb-6 px-2 w-3/4">Technologies implemented:</p>

                <div className="flex flex-col justify-center items-center">
                    <ul className="pb-6 px-2 list-disc list-inside text-justify" data-cy='technologiesList'>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Node/Express</li>
                        <li>React.js</li>
                        <li>Typescript</li>
                        <li>Tailwindcss</li>
                    </ul>
                </div>

                <div className="w-3/4 pb-8 md:pb-6">
                    <p>An avid hiker, I completed my first Camino de Santiago (Camino Francés) in 2018. The Camino Francés takes approximately 5 weeks to walk and consists of an 800km route from Saint-Jean-Pied-du-Port in France to Santiago de Compostela in Spain. Since then I have walked the Camino Primitivo, sections of the Camino del Norte and the Camino de Gran Canaria.</p>

                </div>

                <div className="grid md:grid-cols-2 md:gap-8 md:pt-2 md:pb-20 grid-cols-1" data-cy="gallery">
                    <figure className="px-6 py-3 md:pt-8 md:pb-2 md:pl-8">
                        <img src={Gallery1} alt="Saint-Jean-Pied-du-Port"/>
                    </figure>
                    <figure className="px-6 py-3 md:pt-8 md:pb-2 md:pr-8">
                        <img src={Gallery2} alt="The Pyranees Mountains"/>
                    </figure>
                    <figure className="px-6 py-3 md:pb-8 md:pb-2 md:pl-8">
                        <img src={Gallery3} alt="Road to Leon"/>
                    </figure>
                    <figure className="px-6 pt-3 pb-16 md:pb-8 md:pr-8">
                        <img src={Gallery4} alt="Road to Leon"/>
                    </figure>

                </div>
            </div>
        </div>
    )
}

export default AboutPage;
