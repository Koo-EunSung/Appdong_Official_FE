import React from "react"
import { SiKakaotalk, SiGithub, SiInstagram } from "react-icons/si";

function Footer() {
    return (
        <div>
        <hr className='border border-sky-500 w-3/4 mx-auto'/>
        <footer className="flex justify-between items-center flex-row py-5 w-3/4 mx-auto">
                <p className='ml-2 flex flex-row md:text-base text-sm'>
                    <SiKakaotalk className='text-2xl mr-2'/>
                    sunflow_er (김무성)
                </p>
                <div className='flex flex-row'>
                <a href='https://github.com/APPDONG-KNU'
                    target="_blank" 
                    className='flex flex-row text-sm md:text-base ml-2'>
                    <SiGithub className='text-2xl'/>
                </a>
                <a href='https://www.instagram.com/knu.appdong/'
                    target='_blank'
                    className='flex flex-row text-sm md:text-base ml-2'>
                    <SiInstagram className='text-2xl'/>
                </a>
                </div>
        </footer>
        </div>
    );
}

export default Footer;