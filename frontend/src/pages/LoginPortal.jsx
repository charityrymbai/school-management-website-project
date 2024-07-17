import { useNavigate, useParams } from "react-router-dom"

import MainContentWrappper from "../Wrappers/MainContentWrapper";
import { CardWrapper1 } from "../Wrappers/CardWrapper";
import Heading1 from "../components/Heading1"
import TextLink from "../components/TextLink"
import { useState } from "react";

const LoginPortal = () =>{
    const params = useParams();
    const navigate = useNavigate();

    const [std_id, setStd_id] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("2000-01-01")
    const [errorMessage, setErrorMessage] = useState("")

    function showError(error){
        setErrorMessage(error)
        setTimeout(()=>{setErrorMessage("")}, 5000)
    }

    const onclickHandler = async ()=>{
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/student/signin`,{
            method: "POST", 
            body: JSON.stringify({
                std_id: parseInt(std_id), 
                date_of_birth: new Date(dateOfBirth).toISOString(),
            })
        })

        if (!res.ok){
            showError("Server error. Please try again later")
        }
        const data = await res.json()
        if(!data.token){
            showError(data.message)
        } else {
            localStorage.setItem("token", data.token)
            navigate("/dashboard/student")
        }
    }

    return <>
        <MainContentWrappper>
            <div className="flex justify-center">
                <CardWrapper1 width={300}>
                    <div className="grid grid-cols-1 w-[200px]">
                        <Heading1>Welcome {params.user}s!!</Heading1>
                        <input 
                            className="p-2 h-10 border-2 border-gray-400 rounded-md my-5" 
                            placeholder="Student ID no"
                            onChange={(e)=>{
                                setStd_id(e.target.value);
                            }}
                            ></input>
                        <input 
                            className="p-2 h-10 border-2 border-gray-400 rounded-md" 
                            placeholder="Date of Birth"
                            type="date" 
                            min="1960-01-01"
                            onChange={(e)=>{
                                setDateOfBirth(e.target.value);
                            }}
                            ></input>
                        <TextLink href="#">Forgot Password?</TextLink>
                        <button
                            className="bg-indigo-700 hover:bg-indigo-900 text-white 
                            rounded-full py-2"
                            onClick={onclickHandler}
                        >Submit</button>
                        <div
                            className="text-sm text-red-500"
                        >{errorMessage}</div>
                    </div>
                </CardWrapper1>
            </div>
        </MainContentWrappper>
    </>
}

export default LoginPortal