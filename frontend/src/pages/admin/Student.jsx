import { useState } from 'react';
import TopBar2 from '../../components/TopBar2';
import Loader from '../../components/Loader';

const Student = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [rollNo, setRollno] = useState()
    const [Class, setClass] = useState()
    const [cgpa, setCgpa] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const token = localStorage.getItem("token")

    function textMessage(text){
        setMessage(text)
        setTimeout(()=>setMessage(''),5000)
    }

    function onSubmitClick(){
        setLoading(true)
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/admin/createStudent`,
            {
                method: "POST", 
                body: JSON.stringify({
                    firstName: firstName, 
                    lastName: lastName,
                    date_of_birth: new Date(dateOfBirth).toISOString(), 
                    roll_no: parseFloat(rollNo),  
                    cgpa: parseInt(cgpa),
                    class: parseInt(Class)
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
                <div>Create Student</div>
                <input 
                    type='text' 
                    placeholder='First Name'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    ></input>
                <input 
                    type='text' 
                    placeholder='Last Name'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>{setLastName(e.target.value)}}
                    ></input>
                <input 
                    type='text'
                    placeholder='Roll no' 
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>{setRollno(e.target.value)}}
                    ></input>
                <input 
                    type='text' 
                    placeholder='Class'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>{setClass(e.target.value)}}
                    ></input>
                <input 
                    type='text' 
                    placeholder='CGPA'
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>{setCgpa(e.target.value)}}
                    ></input>
                <input 
                    type='date' 
                    className='border-2 rounded-2xl p-2'
                    onChange={(e)=>{setDateOfBirth(e.target.value)}}
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

export default Student;
