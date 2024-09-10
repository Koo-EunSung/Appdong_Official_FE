import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/customAxios";

function Admin() {
    const location = useLocation();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        axios.get('/auth', {withCredentials:true})
        .then((res) => {
            const userData = res.data;
            if(userData.authenticated && userData.authorities.some(auth => auth === 'ROLE_ADMIN')) {
                setUserInfo(userData);
            } else {
                navigate("/login");
            }
        })
        .catch((err) => {
            console.log(err);
            navigate("/login");
        })
    }, [navigate]);

    const logoutHander = () => {
        axios.get('/auth/logout', {withCredentials:true})
        .then((res) => {
            if(res.status === 200) {
                alert("로그아웃 되었습니다.");
                navigate('/');
            }
        }).catch((err) => {
            console.error("로그아웃 에러: ",err);
        })
    }
    if(!userInfo) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <p>username: {userInfo?.username}</p>
            <p>authorities: {userInfo?.authorities}</p>
            <button onClick={() => logoutHander()}>로그아웃</button>
            <button>
                <Link to="answer-sheet"> 답변 조회 </Link>
            </button>
            <Outlet />
        </div>
    );
}

export default Admin;