import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function Register() {
    const location = useLocation();
    const formId = location.state;
    const data = {
        id: 1,
        title: "테스트용 설문지",
        description: "테스트용 설문지의 설명입니다.",
        questions: [
          {
            id: 1,
            title: "질문1",
            description: "질문 1의 설명",
            choice: null,
            type: "SHORT_ANSWER"
          },
          {
            id: 2,
            title: "질문2",
            description: "질문 2의 설명",
            choice: null,
            type: "LONG_ANSWER"
          },
          {
            id: 3,
            title: "질문3",
            description: "질문 3의 설명",
            choice: [
              "질문3 선택지 1번",
              "질문3 선택지 2번",
              "질문3 선택지 3번"
            ],
            type: "SELECT"
          },
          {
            id: 4,
            title: "질문4",
            description: "질문 4의 설명",
            choice: [
              "질문4 선택지 1번",
              "질문4 선택지 2번",
              "질문4 선택지 3번",
              "인문대학",
              "사회과학대학",
              "자연과학대학",
              "경상대학",
              "공과대학",
              "IT대학",
              "농업생명과학대학",
              "예술대학",
              "사범대학",
              "의과대학",
              "치과대학",
              "수의과대학",
              "생활과학대학",
              "간호대학",
              "약학대학",
              "첨단기술융합대학",
              "생태환경대학",
              "과학기술대학",
              "행정학부",
              "자율전공부"
            ],
            type: "DROP_DOWN"
          }
        ],
        active: true
    };

    const [userInfo, setUserInfo] = useState({
        name: "",
        studentId: ""
    });

    const [answers, setAnswers] = useState([
        {
            questionId: "",
            answer: ""
        }
    ]);

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        setHeaderHeight(header.offsetHeight);
        console.log(formId);
    }, []);

    const getQuestionList = data.questions.map((question) => (
        <div className="px-5 py-4 flex flex-col justify-center text-left rounded-md mb-5 bg-gray-50">
            <p className="text-xl">{question.title}</p>
            <p>{question.description}</p>
            <input
                className="mt-7 focus:outline-none border-b-2 border-blue-500 bg-transparent w-1/2"
                type="text"
                placeholder="내 답변"/>
        </div>
    ))

    const changeAnswer = (questionId, answer) => {
        console.log(`questionId: ${questionId} answer: ${answer}`);
        const found = answers.some((answer) => answer.questionId === questionId);
        if(found) {
            setAnswers(answers.map((item) => {
                if(item.questionId === questionId) {
                    return {...item, answer:answer};
                }
                return item;
            }))
        } else {
            setAnswers([...answers, {questionId:questionId, answer:answer}]);
        }
    }

    return (
        <div className="bg-sky-100 h-full">
            <Header />
            <main className="flex flex-col" style={{marginTop: `${headerHeight}px`}}>
                <div className="flex flex-col justify-center items-center text-center py-10 bg-black bg-opacity-25">
                    <h1 className="text-white text-4xl font-bold">{data.title}</h1>
                    <p className="text-white text-xl">{data.description}</p>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="flex flex-col justify-center w-4/5 md:w-3/5 rounded-md bg-white mb-5">
                        <p className="px-5 py-4 text-3xl text-white bg-sky-500 rounded-t-md"></p>
                        <form className="px-5 py-4 flex flex-col">
                            <div className="px-5 py-4 flex flex-col md:flex-row justify-start rounded-md mb-5 bg-gray-50">
                                <div className="mb-3 flex justify-between md:block md:w-1/2">
                                    <label className="mr-3 text-xl">이름</label>
                                    <input 
                                        className="focus:outline-none border-b-2 border-blue-500 bg-transparent"
                                        type="string"
                                    />
                                </div>
                                <div className="flex justify-between md:block md:w-1/2">
                                    <label className="mr-3 text-xl">학번(10자리)</label>
                                    <input
                                        className="focus:outline-none border-b-2 border-blue-500 bg-transparent"
                                        type="string"
                                        placeholder="20XXXXXXXX"
                                    />
                                </div>
                                </div>
                                {data.questions.map((question) => (
                                    <div className=" flex flex-col justify-center text-left rounded-md mb-5 bg-white">
                                        <div className="px-5 py-4 flex flex-col justify-center text-left rounded-md mb-5 bg-gray-50">
                                        <p className="text-xl">{question.title}</p>
                                        <p>{question.description}</p>
                                        {
                                            question.type === "SHORT_ANSWER"
                                            ?
                                            <input
                                                className="mt-7 focus:outline-none border-b-2 border-blue-500 bg-transparent w-1/2"
                                                type="text"
                                                placeholder="단문형 답변"/>
                                            :null
                                        }
                                        {
                                            question.type === "LONG_ANSWER"
                                            ?
                                            <textarea 
                                                className="mt-7 px-3 py-3 focus:outline-none border-2 border-blue-500 rounded-md bg-transparent"
                                                rows={5} 
                                                cols={33}
                                                placeholder="장문형 답변"></textarea>
                                            : null
                                        }
                                        {
                                            question.type === "SELECT"
                                            ?
                                            <div className="mt-7 flex flex-col">
                                            {question.choice.map((value) => (
                                                <label className="my-2">
                                                    <input
                                                        checked={
                                                            answers.some(answer => answer.questionId === question.id)
                                                             && answers.find(answer => answer.questionId === question.id).answer === value}
                                                        value={value}
                                                        type="radio"
                                                        onChange={() => changeAnswer(question.id, value)}
                                                    />
                                                    {value}
                                                </label>
                                            ))}
                                            </div>
                                            : null
                                        }
                                        {
                                            question.type === "DROP_DOWN" && question.choice !== undefined
                                            ?
                                            <select
                                                className="mt-7 px-3 py-3 w-1/2 focus:outline-blue-500"
                                                onChange={(event)=> console.log(`id: ${question.id} value: ${event.target.value}`)}
                                            >
                                                <option disabled hidden selected>선택</option>
                                                {question.choice.map((value) => (
                                                    <option value={value}>{value}</option>
                                                ))}
                                            </select>
                                            : null
                                        }
                                    </div>
                                </div>
                                ))}
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Register;