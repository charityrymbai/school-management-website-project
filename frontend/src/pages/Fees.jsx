import { useEffect, useState } from "react";
import TopBar2 from "../components/TopBar2";
import { CardWrapper4 } from "../Wrappers/CardWrapper";
import { h3Style, pStyle } from "../responsive-styles-for-elements/tailwind-styles-exports";

const Fees = () => {
    const [fees, setFees] = useState([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login/Student');
    }

    useEffect(()=>{
        function getWidth(){
            const width = window.innerWidth
            setScreenWidth(width)
        }
        addEventListener('resize', getWidth)
        return ()=> removeEventListener('resize', getWidth)
    },[])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/student/getFeeDetails`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setFees(data)
        })
    }, [])
    return (
        <div className="w-full">
            <TopBar2 Heading={"Fees"}/>
            <div className="p-4">
                <CardWrapper4>
                    <table className="min-w-[350px] w-full border-spacing-5">
                        <thead className={h3Style+" border-b-4 h-16"}>
                            <tr>
                                <th>{screenWidth>1020? "Reference Id": "Ref. Id"}</th>
                                <th>{screenWidth>1020? "Installment No": "Ins. No"}</th>
                                <th>Amount</th>
                                <th>Paid on</th>
                            </tr>
                        </thead>
                        <tbody className={pStyle}>
                            {
                                fees.map((row, index)=>{
                                    return (
                                        <tr key={index} className="h-16 text-center border-b-2">
                                            <td>{row.fees_reference_id}</td>
                                            <td>{row.installment_no}</td>
                                            <td>{row.amount}</td>
                                            <td>{new Date(row.paid_on).toLocaleDateString("en-GB", {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric'
                                            })}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </CardWrapper4>
            </div>
        </div>
    );
};

export default Fees;
