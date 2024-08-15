import React from "react";
import logo from "../logo_transparent.png";

function Header() {
    return (
        <header className="bg-sky-500 text-white shadow-md fixed top-0 left-0 w-full">
            <div className="container p-4 flex justify-start">
                <div className="flex items-center">
                <img src={logo} className="w-16 h-9"/>
                <h1 className="text-2xl ml-2 mr-5 font-[SBAggroB]">APPDONG</h1>
                </div>
                <nav className="flex items-end">
                    <ul className="flex space-x-4 font-[SBAggroB]">
                        <li>
                            <a href="#home" className="transition ease-in-out delay-75 hover:text-blue-500 duration-200">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="transition ease-in-out delay-75 hover:text-blue-500 duration-200">About</a>
                        </li>
                        <li>
                            <a href="#services" className="transition ease-in-out delay-75 hover:text-blue-500 duration-200">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="transition ease-in-out delay-75 hover:text-blue-500 duration-200">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;