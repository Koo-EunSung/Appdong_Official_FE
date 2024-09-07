import Header from '../components/Header';
import '../App.css';
import logo_transparent from '../logo_transparent.png';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../components/Footer';

function Main() {
    const navigate = useNavigate();
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        setHeaderHeight(header.offsetHeight);
    }, []);

    const handleRegisterButton = () => {
        navigate("/form");
    }
    return (
        <div className="App flex flex-col bg-sky-100 min-h-dvh h-full">
        <Header />
        <main className="flex flex-col justify-center items-center mb-16 w-3/4 flex-grow mx-auto" style={{marginTop: `${headerHeight}px`}}>
            <div className="flex flex-col justify-center items-center">
                <img className="w-10/12 md:w-full" src={logo_transparent}/>
            </div>
            <h1 className='text-4xl font-bold text-center mb-4'>비전공자도 앱을 만들 수 있도록</h1>
            <h2 className='text-2xl text-center font-bold'>경북대 중앙동아리 유일 앱개발 동아리</h2>
            <h3 className='text-xl text-center font-semibold'>앱동 공식 홈페이지에 오신 것을 환영합니다</h3>
            <button
                className='bg-sky-500 text-white rounded-full mt-3 px-5 py-3 md:px-6 md:py-4 md:text-xl transition ease-in-out delay-75 hover:bg-blue-600 duration-200'
                onClick={() => handleRegisterButton()}>가입 신청</button>
        </main>
        <Footer />
        </div>
  );
}

export default Main;