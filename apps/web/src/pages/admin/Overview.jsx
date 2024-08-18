import { Link } from 'react-router-dom';
import TopBar2 from '../../components/TopBar2';
import StudentNumber from '../../components/StudentNumber';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import TeacherNumber from '../../components/TeacherNumber';

const Overview = () => {
     const [studentNo, setStudentNo] = useState();
     const [teacherNo, setTeacherNo] = useState();
     const [loading, setLoading] = useState(false);

     const token = localStorage.getItem('token');

     useEffect(() => {
          setLoading(true);
          fetch(
               `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/admin/getAdminOverview`,
               {
                    method: 'GET',
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               }
          )
               .then((res) => {
                    return res.json();
               })
               .then((data) => {
                    setStudentNo(data.stdNumber);
                    setTeacherNo(data.teachNumber);
                    setLoading(false);
               });
     }, [token]);
     return (
          <>
               {loading ? (
                    <Loader />
               ) : (
                    <div className="w-full">
                         <TopBar2 Heading={'Overview'} />
                         <div className="p-5 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <Link to={'../student'}>
                                   <StudentNumber studentNo={studentNo} />
                              </Link>
                              <Link to={'../teacher'}>
                                   <TeacherNumber teacherNo={teacherNo} />
                              </Link>
                         </div>
                    </div>
               )}
          </>
     );
};

export default Overview;
