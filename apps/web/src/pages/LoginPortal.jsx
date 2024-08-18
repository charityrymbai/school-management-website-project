import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';

import MainContentWrappper from '../Wrappers/MainContentWrapper';
import { CardWrapper1 } from '../Wrappers/CardWrapper';
const Heading1 = React.lazy(() => import('../components/Heading1'));
const TextLink = React.lazy(() => import('../components/TextLink'));
import Loader from '../components/Loader';

const LoginPortal = () => {
     const params = useParams();
     const navigate = useNavigate();

     const [loginString, setLoginString] = useState('');
     const [dateOfBirth, setDateOfBirth] = useState('2000-01-01');
     const [errorMessage, setErrorMessage] = useState('');
     const [password, setPassword] = useState('');
     const [loading, setLoading] = useState(false);

     function showError(error) {
          setErrorMessage(error);
          setTimeout(() => {
               setErrorMessage('');
          }, 5000);
     }

     const onclickHandler = async () => {
          let requestBody;
          const id = loginString.split('-')[1];
          try {
               if (loginString.split('-')[1].length == 3) {
                    if (
                         params.user.toLowerCase() === 'student' &&
                         loginString.split('-')[0] === 'ST'
                    ) {
                         requestBody = {
                              id: parseInt(id),
                              date_of_birth: new Date(
                                   dateOfBirth
                              ).toISOString(),
                         };
                    } else if (
                         params.user.toLowerCase() === 'teacher' &&
                         loginString.split('-')[0] === 'TE'
                    ) {
                         requestBody = {
                              id: parseInt(id),
                              password: password,
                         };
                    } else if (
                         params.user.toLowerCase() === 'admin' &&
                         loginString.split('-')[0] === 'AD'
                    ) {
                         requestBody = {
                              id: parseInt(id),
                              password: password,
                         };
                    } else {
                         showError('Invalid ID');
                         return;
                    }
               } else {
                    showError('Invalid ID');
                    return;
               }
          } catch {
               showError('Invalid ID');
               return;
          }
          setLoading(true);
          const res = await fetch(
               `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/${params.user.toLowerCase()}/signin`,
               {
                    method: 'POST',
                    body: JSON.stringify(requestBody),
               }
          );
          setLoading(false);

          if (!res.ok) {
               showError('Server error. Please try again later');
          }
          const data = await res.json();
          if (!data.token) {
               showError(data.message);
          } else {
               localStorage.setItem('token', data.token);
               navigate(`/dashboard/${params.user.toLowerCase()}`);
          }
     };

     return (
          <div className="flex justify-center">
               <MainContentWrappper>
                    {loading ? (
                         <Loader />
                    ) : (
                         <div className="flex justify-center">
                              <div className="w-fit">
                                   <CardWrapper1>
                                        <div className="grid grid-cols-1">
                                             <Heading1>
                                                  Welcome {params.user}s!!
                                             </Heading1>
                                             <input
                                                  className="w-full p-2 h-10 border-2 border-gray-400 rounded-md my-5"
                                                  placeholder={`${params.user} ID No.`}
                                                  onChange={(e) => {
                                                       setLoginString(
                                                            e.target.value
                                                       );
                                                  }}
                                             ></input>
                                             {params.user.toLowerCase() ===
                                             'student' ? (
                                                  <>
                                                       <input
                                                            className="w-full p-2 h-10 border-2 border-gray-400 rounded-md"
                                                            placeholder="Date of Birth"
                                                            type="date"
                                                            min="1960-01-01"
                                                            onChange={(e) => {
                                                                 setDateOfBirth(
                                                                      e.target
                                                                           .value
                                                                 );
                                                            }}
                                                       ></input>
                                                       <TextLink href="#">
                                                            Forgot Student ID?
                                                       </TextLink>
                                                  </>
                                             ) : (
                                                  <>
                                                       <input
                                                            className="w-full p-2 h-10 border-2 border-gray-400 rounded-md"
                                                            placeholder="Password"
                                                            type="password"
                                                            onChange={(e) => {
                                                                 setPassword(
                                                                      e.target
                                                                           .value
                                                                 );
                                                            }}
                                                       ></input>
                                                       <TextLink href="#">
                                                            Forgot ID or
                                                            Password?
                                                       </TextLink>
                                                  </>
                                             )}
                                             <button
                                                  className="bg-indigo-700 hover:bg-indigo-900 text-white 
                            rounded-full py-2"
                                                  onClick={onclickHandler}
                                             >
                                                  Submit
                                             </button>
                                             <div className="text-sm text-red-500">
                                                  {errorMessage}
                                             </div>
                                        </div>
                                   </CardWrapper1>
                              </div>
                         </div>
                    )}
               </MainContentWrappper>
          </div>
     );
};

export default LoginPortal;
