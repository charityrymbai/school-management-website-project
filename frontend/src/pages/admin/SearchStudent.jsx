import { useEffect, useState } from 'react';
import TopBar2 from '../../components/TopBar2';
import { CardWrapper1 } from '../../Wrappers/CardWrapper';
import Loader from '../../components/Loader';

const SearchStudent = () => {
    const [searchValue, setSearchValue] = useState('');
    const [returnArray, setReturnArray] = useState([]);
    const [loading, setLoading] = useState(false);

    let timer;
    function debounceSearch(value) {
        clearInterval(timer);
        timer = setTimeout(() => {
            setSearchValue(value);
        }, 2000);
    }
    let queryData;
    if (searchValue) {
        queryData = { firstName: searchValue };
    } else {
        queryData = {};
    }

    useEffect(() => {
        setLoading(true);
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/admin/getStudent`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(queryData),
            },
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setReturnArray(res.data);
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    return (
        <div className="w-full">
            <TopBar2 Heading={'Search Student'} />
            <div className="flex justify-center p-4">
                <input
                    type="text"
                    className="w-full h-10 mt-4 p-4 rounded-lg border-2 border-gray-300"
                    placeholder="Search"
                    onChange={(e) => debounceSearch(e.target.value)}
                ></input>
            </div>
            <div className="p-4 grid gap-4">
                {loading ? (
                    <Loader />
                ) : returnArray.length > 0 ? (
                    returnArray.map((item, index) => {
                        return (
                            <div key={index}>
                                <CardWrapper1>
                                    <div className="flex justify-between gap-4">
                                        <p className="text-lg font-semibold">
                                            Student ID:{' '}
                                            {String(item.std_id).padStart(
                                                3,
                                                '0',
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <p className="text-lg font-semibold">
                                            Name:{' '}
                                            {item.firstName +
                                                ' ' +
                                                item.lastName}
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Roll no: {item.roll_no}
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <p className="text-lg font-semibold">
                                            CGPA: {item.cgpa}
                                        </p>
                                        <p className="text-lg font-semibold">
                                            Class: {item.class}
                                        </p>
                                    </div>
                                </CardWrapper1>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex justify-center">
                        <p className="text-lg font-semibold">No data found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchStudent;
