import AttendanceCard from '../../components/AttendanceCard.jsx';
import GradesCard from '../../components/GradesCard.jsx';
import LibraryCard from '../../components/LibraryCard.jsx';
import FeesCard from '../../components/FeesCard.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar.jsx';
import Loader from '../../components/Loader.jsx';

const Overview = () => {
    let [student, setStudent] = useState({});
    let [lastPaymentDate, setLastPaymentDate] = useState('');
    let [libraryBooks, setLibraryBooks] = useState([]);
    let [attendance, setattendance] = useState([]);
    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login/Student');
    }

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/student/getDetails`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setStudent(data);
                if (data.libraryBooks.length > 0) {
                    setLibraryBooks(data.libraryBooks);
                }
                if (data.fees.length > 0) {
                    const lastIndex = data.fees.length - 1;
                    setLastPaymentDate(data.fees[lastIndex].paid_on);
                }
                if (data.attendance.length > 0) {
                    setattendance(data.attendance);
                }
                setLoading(false);
            });
    }, [token]);
    return (
        <div className="w-full">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <TopBar firstName={student.firstName} />
                    <div className="p-5 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Link to={'../attendance'}>
                            <AttendanceCard attendance={attendance} />
                        </Link>
                        <Link to={'../grades'}>
                            <GradesCard gpa={student.cgpa} />
                        </Link>
                        <Link to={'../library'}>
                            <LibraryCard content={libraryBooks} />
                        </Link>
                        <Link to={'../fees'}>
                            <FeesCard lastPaymentDate={lastPaymentDate} />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Overview;
