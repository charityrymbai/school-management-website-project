import { useEffect, useState } from 'react';
import TopBar2 from '../components/TopBar2';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { CardWrapper4 } from '../Wrappers/CardWrapper';
import {
    h3Style,
    pStyle,
} from '../responsive-styles-for-elements/tailwind-styles-exports';
import useScreenWidth from '../utils/useScreenWidth';

const Attendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const screenWidth = useScreenWidth();

    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login/Student');
    }

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/student/getAttendance`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setAttendance(data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="w-full">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <TopBar2 Heading={'Attendance'} />
                    <div className="p-4">
                        <CardWrapper4>
                            <table className="min-w-[350px] w-full border-spacing-5">
                                <thead className={h3Style + ' border-b-4 h-24'}>
                                    <tr className="border-b-2">
                                        <th colSpan="4" className="text-center">
                                            Missed
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Id</th>
                                        <th>
                                            {screenWidth > 1020
                                                ? 'Subject Id'
                                                : 'S. Id'}
                                        </th>
                                        <th>
                                            {screenWidth > 1020
                                                ? 'Subject Name'
                                                : 'S. Name'}
                                        </th>
                                        <th>
                                            {screenWidth > 1020
                                                ? 'Teacher Name'
                                                : 'T. Name'}
                                        </th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody className={pStyle}>
                                    {attendance.length > 0 ? (
                                        attendance.map((row, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="h-16 text-center border-b-2"
                                                >
                                                    <td>{row.id}</td>
                                                    <td>{row.sub_id}</td>
                                                    <td>
                                                        {row.subject.sub_name}
                                                    </td>
                                                    <td>
                                                        {new Date(
                                                            row.date,
                                                        ).toLocaleDateString(
                                                            'en-GB',
                                                            {
                                                                day: '2-digit',
                                                                month: 'long',
                                                                year: 'numeric',
                                                            },
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="h-16 text-center"
                                            >
                                                No Attendace records so far
                                                taken so far
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </CardWrapper4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Attendance;
