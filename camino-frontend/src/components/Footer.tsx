import React from 'react';
import GithubLogo from '../assets/github-logo.png'

const Footer = (): JSX.Element => {
    const date = new Date().getFullYear();
    return (
        <footer className="w-full h-16 bg-blue text-yellow flex flex-row justify-center items-center text-sm font-accent font-light tracking-wider">

            <span className="p-2"><p>Pippa Thompson</p></span>
            <span className="p-2"><a href="https://www.github.com/ppiippaa" target="_blank"><img src={GithubLogo} alt="Github" className="h-9 "/></a></span>
            <span className="p-2"><p>{date}</p></span>

        </footer>
    );
};

export default Footer;