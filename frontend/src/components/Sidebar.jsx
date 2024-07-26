import PropTypes from 'prop-types';
import { ChevronLast, ChevronFirst, Menu, EllipsisVertical } from 'lucide-react';
import { useContext, createContext, useState, useEffect } from 'react';
import { schoolLogo } from '../../public/images/photosExports';
import { useBaseNavigate } from '../utils/useBaseNavigation.js';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const params = useParams();
    const [expanded, setExpanded] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate(`/login/${params.user.toLowerCase()}`);
    }
    const navigate = useNavigate();

    let [user, setUser] = useState({});

    const token = localStorage.getItem('token');
    if (!token) {
        navigate(`/login/${params.user.toLowerCase()}`);
    }

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/${params.user.toLowerCase()}/getDetails`,
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
                setUser(data);
                setLoading(false);
            });
    }, [token, params.user]);

    return (
        <>
            {loading ? (
                <div></div>
            ) : (
                <div>
                    <aside
                        className={`h-screen fixed w-full md:sticky md:w-fit bg-white border-r shadow-sm transition-transform transform ${
                            showSidebar ? 'translate-x-0' : '-translate-x-full'
                        } md:translate-x-0`}
                    >
                        <nav className="h-full flex flex-col">
                            <div className="p-4 pb-2 flex justify-center md:justify-between items-center">
                                <img
                                    src={schoolLogo}
                                    className={`overflow-hidden transition-all ${
                                        expanded ? 'w-32' : 'w-0'
                                    }`}
                                    alt="schoolLogo"
                                />
                                <button
                                    onClick={() => setExpanded((curr) => !curr)}
                                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 hidden md:block"
                                >
                                    {expanded ? (
                                        <ChevronFirst />
                                    ) : (
                                        <ChevronLast />
                                    )}
                                </button>
                            </div>

                            <SidebarContext.Provider
                                value={{ expanded, setShowSidebar }}
                            >
                                <ul className="flex-1 px-3">{children}</ul>
                            </SidebarContext.Provider>

                            <div className="h-[100px] sticky bottom-0 border-t p-3 flex items-center md:justify-between">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user.firstName+" "+user.lastName}&background=c7d2fe&color=3730a3&bold=true`}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-md"
                                    onClick={()=>{!expanded && setIsMenuOpen(state=>!state)}}
                                />
                                <div
                                    className={`
                flex justify-center items-center text-center
                md:justify-normal md:text-left
                overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
            `}
                                >
                                    <div className="leading-4">
                                        <h4 className="font-semibold">{`${user.firstName} ${user.lastName}`}</h4>
                                        {params.user.toLowerCase() ===
                                        'student' ? (
                                            <>
                                                <span className="text-xs text-gray-600">
                                                    Class: {user.class}
                                                </span>
                                                <br />
                                                <span className="text-xs text-gray-600">
                                                    Roll no: {user.roll_no}
                                                </span>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                        
                                    </div>
                                </div>
                                {
                                    (expanded? (
                                        <button onClick={()=>setIsMenuOpen(state=>!state)}><EllipsisVertical /></button>)
                                    :(<></>))
                                }
                                {
                                    isMenuOpen ? (
                                        <div className="z-50 absolute w-24 -right-10 bottom-16 bg-white shadow-lg border-2 rounded-md p-2">
                                        <ul>
                                            <li><button onClick={logoutHandler} className="w-full text-left">Logout</button>
                                            </li>
                                            <li><button className="w-full text-left">Profile</button>
                                            </li>
                                        </ul>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </nav>
                    </aside>
                    <button
                        onClick={() => {
                            setShowSidebar((curr) => !curr);
                            setExpanded(true);
                        }}
                        className="fixed top-5 right-5 md:hidden p-2 bg-white rounded-full shadow-lg z-50"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            )}
        </>
    );
}

export function SidebarItem({ icon, text, goToPage }) {
    const { expanded, setShowSidebar } = useContext(SidebarContext);
    const location = useLocation();

    const baseNavigate = useBaseNavigate('/dashboard');

    const active = location.pathname.includes(goToPage);

    function onClickHandler() {
        setShowSidebar(false);
        baseNavigate(goToPage);
    }

    return (
        <li
            onClick={onClickHandler}
            className={`
        relative flex justify-center text-center py-2 px-3 my-1
        md:justify-normal md:text-left 
        font-medium rounded-md cursor-pointer
        transition-colors group

        ${
            active
                ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? 'w-52 ml-3' : 'w-0'
                }`}
            >
                {text}
            </span>
            {!expanded && (
                <div
                    className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                >
                    {text}
                </div>
            )}
        </li>
    );
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

SidebarItem.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    goToPage: PropTypes.string.isRequired,
};
