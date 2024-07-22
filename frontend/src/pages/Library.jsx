import { useEffect, useState } from 'react';
import TopBar2 from '../components/TopBar2';
import { CardWrapper4 } from '../Wrappers/CardWrapper';
import {
    h3Style,
    pStyle,
} from '../responsive-styles-for-elements/tailwind-styles-exports';
import useScreenWidth from '../utils/useScreenWidth';

const Library = () => {
    const [libraryRecords, setLibraryRecords] = useState([]);
    const screenWidth = useScreenWidth();

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login/Student');
    }

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/student/getLibraryRecords`,
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
                setLibraryRecords(data);
            });
    }, []);
    return (
        <div className="w-full">
            <TopBar2 Heading={'Library'} />
            <div className="p-4">
                <CardWrapper4>
                    <table className="min-w-[350px] w-full border-spacing-5">
                        <thead className={h3Style + ' border-b-4 h-16'}>
                            <tr>
                                <th>Id</th>
                                <th>
                                    {screenWidth > 1020 ? 'Book No' : 'B. No'}
                                </th>
                                <th>Taken on</th>
                                <th>Due on</th>
                            </tr>
                        </thead>
                        <tbody className={pStyle}>
                            {libraryRecords.length > 0 ? (
                                libraryRecords.map((row, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="h-16 text-center border-b-2"
                                        >
                                            <td>{row.id}</td>
                                            <td>{row.bookNo}</td>
                                            <td>
                                                {new Date(
                                                    row.takenOn,
                                                ).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </td>
                                            <td>
                                                {new Date(
                                                    row.dueDate,
                                                ).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
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
                                        No Books taken so far
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </CardWrapper4>
            </div>
        </div>
    );
};

export default Library;
