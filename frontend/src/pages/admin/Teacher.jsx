import { useState } from 'react';
import TopBar2 from '../../components/TopBar2';
import Loader from '../../components/Loader';

const Teacher = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [dept, setDept] = useState()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const token = localStorage.getItem("token")

    function textMessage(text){
        setMessage(text)
        setTimeout(()=>setMessage(''),5000)
    }

    function onSubmitClick(){
        if(!(confirmPassword === password)){
            textMessage("Password did not match")
            return;
        }
        setLoading(true)
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/admin/createTeacher`,
            {
                method: "POST", 
                body: JSON.stringify({
                    firstName: firstName, 
                    lastName: lastName,
                    date_of_birth: new Date(dateOfBirth).toISOString(), 
                    password: password, 
                    dept: dept
                }),
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res)=>{
            return res.json()
        }).then((data)=>{
            textMessage(data.message)
            setLoading(false)
        })
    }

    return (
        <>{loading? <Loader /> :
        <div className="w-full">
            <TopBar2 Heading={'Student'} />
            <div className='flex flex-col w-[300px]'>
                <div>Create Teacher</div>
                <input 
                    type='text' 
                    placeholder='First Name'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>setFirstName(e.target.value)}
                    ></input>
                <input 
                    type='text' 
                    placeholder='Last Name'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>setLastName(e.target.value)}
                    ></input>
                <input 
                    type='text' 
                    placeholder='Password'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                <input 
                    type='password' 
                    placeholder='Confirm Password'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    ></input>
                <select
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>setDept(e.target.value)}
                >
                    <option>--Choose Department--</option>
                    <option>MATH</option>
                    <option>SCIENCE</option>
                    <option>SOCIAL</option>
                    <option>ENGLISH</option>
                </select>
                <input 
                    type='date' 
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>setDateOfBirth(e.target.value)}
                    ></input>
                <button 
                    onClick={onSubmitClick}
                    className='rounded-2xl p-2 bg-red-700 text-white'
                    >Submit</button>
                <div className='text-sm text-red-500'>{message}</div>
            </div>
        </div>}
        </>
    );
};

export default Teacher;
