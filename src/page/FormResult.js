import React, { useEffect, useState } from "react";
import axios from "../api/customAxios";

function FormResult() {
    const [form, setForm] = useState([]);
    const [currentForm, setCurrentForm] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/form')
        .then((res) => {
            setForm(res.data);
        })
        .catch((err) => console.log(err.message));
    }, []);

    useEffect(() => {
        axios.get(`/answer-sheet`, {
            params: {
                formId: Number(currentForm)
            }
        }).then((res)=>{
            setData(res.data);
        }).catch((err) => console.log(err.message));

    }, currentForm);

    return (
        <div>
            <h1>설문지 답변 조회 페이지</h1>
            {form != undefined && form.length != 0 && 
            <select
                onChange={(event) => setCurrentForm(event.target.value)}>
                <option disabled hidden selected value="">조회할 폼을 선택하세요</option>
                {form.map((form) => (
                    <option value={form.id}>{form.id} {form.title}</option>
                ))}
            </select>
            }
            <div>
                {data != undefined && data.length != 0 && (
                    <table className="border-collapse">
                        <tr>
                            <th className="border border-black px-5 py-3 align-middle"scope="col">이름</th>
                            <th className="border border-black px-5 py-3 align-middle" scope="col">학번</th>
                            {data?.question.map((question) => (
                                <th className="border border-black px-5 py-3 align-middle" scope="col">{question.title}</th>
                            ))}
                        </tr>
                        {data.answerSheet.length !== 0 && (
                            data.answerSheet.map((answer) => (
                                <tr>
                                    <td className="border border-black px-5 py-3 align-middle">{answer.name}</td>
                                    <td className="border border-black px-5 py-3 align-middle">{answer.studentId}</td>
                                    {answer.answers.map((ans) => (
                                        <td className="border border-black px-5 py-3 align-middle whitespace-pre">{ans.answer}</td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </table>
                )}
            </div>
        </div>
    );
}

export default FormResult;