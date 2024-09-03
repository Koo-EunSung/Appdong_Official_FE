import Header from '../components/Header';
import '../App.css';
import logo_transparent from '../logo_transparent.png';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

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
        <div className="App bg-sky-100 h-dvh">
        <Header />
        <main className="flex flex-col justify-center items-center py-36" style={{marginTop: `${headerHeight}px`}}>
            <div className="flex flex-col justify-center items-center">
            <img className="w-10/12 md:w-full" src={logo_transparent}/>
            </div>
            <h1 className='text-2xl font-bold'>경북대 중앙동아리 유일 앱개발 동아리</h1>
            <h2 className='text-xl font-semibold'>앱동 공식 홈페이지에 오신 것을 환영합니다</h2>
            <button
                className='bg-sky-500 text-white rounded-xl mt-3 px-5 py-3 transition ease-in-out delay-75 hover:bg-blue-600 duration-200'
                onClick={() => handleRegisterButton()}>가입 신청</button>
        </main>
        </div>
  );
}

export default Main;