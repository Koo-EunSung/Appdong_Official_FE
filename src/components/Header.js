import React from "react";
import { useState } from "react";
import logo from "../logo_transparent.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-sky-500 text-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container p-4 flex justify-start">
                <div className="flex items-center">
                    <button className="block md:hidden text-white mr-2" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                    <img src={logo} className="w-16 h-9"/>
                    <h1 className="text-2xl ml-2 mr-5 font-[SBAggroB]">APPDONG</h1>
                </div>
                <nav className="hidden md:flex items-end">
                    <ul className="flex space-x-4 font-[SBAggroB]">
                        <li>
                            <Link to ="/" className="transition ease-in-out delay-75 hover:text-blue-500 duration-200">Home</Link>
                        </li>
                        <li>
                            <Link to ="/form" className="transition ease-in-out delay-75 hover:text-blue-500 duration-200">Form</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* 슬라이드 메뉴 */}
            <div className={`fixed top-0 left-0 w-3/4 bg-sky-600 h-full z-20 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
                {/* 닫기 아이콘 */}
                <div className="flex justify-between items-center p-4">
                    <div>
                        <img src={logo} className="w-16 h-9 pb-2"/>
                        <h1 className="text-2xl ml-2 mr-5 font-[SBAggroB]">APPDONG</h1>
                    </div>
                    <button className="text-white p-4" onClick={toggleMenu}>
                        <IoClose />
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col space-y-4 p-4">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/form" className="hover:underline">Form</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;