import React, { useEffect, useState } from 'react';
const TopBar2 = React.lazy(() => import('../../components/TopBar2'));
import { CardWrapper4 } from '../../Wrappers/CardWrapper';
import {
    h3Style,
    pStyle,
} from '../../responsive-styles-for-elements/tailwind-styles-exports';
import useScreenWidth from '../../utils/useScreenWidth';
const Loader = React.lazy(() => import('../../components/Loader'));
import { useNavigate } from 'react-router-dom';

const Fees = () => {
    const [fees, setFees] = useState([]);
    const screenWidth = useScreenWidth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    if (!token) {
        navigate('/login/Student');
    }

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/student/getFeeDetails`,
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
                setFees(data);
                setLoading(false);
            });
    }, [token]);

    return (
        <div className="w-full">
            {loading ? (
                <Loader></Loader>
            ) : (
                <div>
                    <TopBar2 Heading={'Fees'} />
                    <div className="p-4">
                        <CardWrapper4>
                            <table className="min-w-[350px] w-full border-spacing-5">
                                <thead className={h3Style + ' border-b-4 h-16'}>
                                    <tr>
                                        <th>
                                            {screenWidth > 1020
                                                ? 'Reference Id'
                                                : 'Ref. Id'}
                                        </th>
                                        <th>
                                            {screenWidth > 1020
                                                ? 'Installment No'
                                                : 'Ins. No'}
                                        </th>
                                        <th>Amount</th>
                                        <th>Paid on</th>
                                    </tr>
                                </thead>
                                <tbody className={pStyle}>
                                    {fees.length > 0 ? (
                                        fees.map((row, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="h-16 text-center border-b-2"
                                                >
                                                    <td>
                                                        {row.fees_reference_id}
                                                    </td>
                                                    <td>
                                                        {row.installment_no}
                                                    </td>
                                                    <td>{row.amount}</td>
                                                    <td>
                                                        {new Date(
                                                            row.paid_on,
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
                                                No Fees paid so far
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

export default Fees;
