import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import axios from "../api/customAxios";
import { Navigate, useNavigate } from "react-router-dom";

function FormList() {
    const navigate = useNavigate();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [form, setForm] = useState([]);

    useEffect(() => {
      const header = document.querySelector('header');
      setHeaderHeight(header.offsetHeight);

      axios.get('/form')
        .then((res) => {
            console.log(res.data);
            setForm(res.data);
        })
        .catch((err) => console.log(err.message));

    }, []);

    const buttonClickHandler = (formId) => {
        navigate('/register', {state: formId});
    }

    const getForm = form.map((item) => (
        <div key={item.id} className="flex flex-col justify-center w-4/5 md:w-3/5 rounded-md bg-white mb-5">
            <h2 className="px-5 py-4 text-3xl text-white bg-sky-500 rounded-t-md">{item.title}</h2>
            <p className="px-5 py-5 text-xl whitespace-pre-line">{item.description}</p>
            <button 
                className='bg-sky-500 text-white text-xl rounded-xl ml-auto mx-5 my-5 px-5 py-3 w-fit align- transition ease-in-out delay-75 hover:bg-blue-600 duration-100'
                onClick={()=>buttonClickHandler(item.id)}>작성</button>
        </div>
    ))

    return (
        <div className="bg-sky-100 min-h-dvh h-full">
            <Header />
            <main className="flex flex-col" style={{marginTop: `${headerHeight}px`}}>
                <div className="flex flex-col justify-center items-center text-center py-10 bg-black bg-opacity-25">
                    <h1 className="text-white text-4xl font-bold">가입 신청</h1>
                    <p className="text-white text-xl mt-2 w-2/4">앱동의 일원으로서 함께 변화하고 성장할 여러분을 기다립니다</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    {
                        form.length === 0
                        ? 
                        <div className="text-center text-black w-3/4 md:w-3/5 py-24 h-dvh">
                            <p className="text-2xl font-bold">현재 가입 신청 기간이 아닙니다</p>
                            <p className="text-xl">오류라고 생각되시면, 동아리 공식 인스타를 통해 문의해주세요</p>
                            <p className="text-lg">공식 인스타그램: @knu.appdong</p>
                        </div>
                        : getForm
                    }
                </div>
            </main>
        </div>
    );
}

export default FormList;