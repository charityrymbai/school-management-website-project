import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Loader = React.lazy(() => import('../../components/Loader'));
import { CardWrapper4 } from '../../Wrappers/CardWrapper';
import { h3Style } from '../../responsive-styles-for-elements/tailwind-styles-exports';
import useScreenWidth from '../../utils/useScreenWidth';
import PopupWrapper from '../../Wrappers/PopupWrapper';

const Attendance = () => {
     const [showPopup, setShowPopup] = useState(false);

     const openPopup = () => {
          setShowPopup(true);
     };

     const closePopup = () => {
          setShowPopup(false);
     };

     const [attendance, setAttendance] = useState([]);
     const [loading, setLoading] = useState(true);
     const screenWidth = useScreenWidth();
     const attended = 39;
     const total = 40;
     const subjects = [
          {
               sub_id: 'MA-101',
               sub_name: 'Maths',
          },
          {
               sub_id: 'SA-102',
               sub_name: 'Social Science',
          },
          {
               sub_id: 'MB-301',
               sub_name: 'Physical Education',
          },
     ];

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
               }
          )
               .then((res) => {
                    return res.json();
               })
               .then((data) => {
                    setAttendance(data);
                    setLoading(false);
               });
     }, [token]);
     return (
          <div className="w-full">
               {loading ? (
                    <Loader />
               ) : (
                    <div className={`${showPopup ? 'filter blur-sm' : ''}`}>
                         {showPopup ? (
                              <div className="filter blur-sm w-screen h-screen fixed top-0 left-0 -z-10"></div>
                         ) : (
                              <></>
                         )}
                         <div className="border-b-2 p-4 py-10 flex justify-between">
                              <div className="bg-blue-400 h-44 w-96 rounded-full grid place-items-center text-white text-7xl font-extrabold">
                                   {attended}/{total}
                              </div>
                              <div className="rounded-full bg-red-400 h-40 w-40 grid p-4 place-items-center text-white text-6xl font-extrabold">
                                   {((attended / total) * 100).toFixed(0)}%
                              </div>
                         </div>
                         <div className="p-4 grid grid-cols-3 gap-4">
                              {subjects.map((subject, index) => {
                                   return (
                                        <div
                                             key={index}
                                             onClick={openPopup}
                                             className="cursor-pointer"
                                        >
                                             <CardWrapper4>
                                                  <h3 className={h3Style}>
                                                       {subject.sub_id}
                                                  </h3>
                                                  {subject.sub_name}
                                             </CardWrapper4>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               )}
               <PopupWrapper show={showPopup} onClose={closePopup}>
                    <h2 className="text-xl font-semibold">Popup Title</h2>
                    <p className="mt-4">
                         This is the content inside the popup.
                    </p>
               </PopupWrapper>
          </div>
     );
};

export default Attendance;
