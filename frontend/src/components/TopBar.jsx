import { CircleUserRound } from 'lucide-react';
import {
    h1Style,
    pStyle,
} from '../responsive-styles-for-elements/tailwind-styles-exports';

const TopBar = ({ firstName }) => {
    return (
        <div className="border-b-2 h-fit p-10 flex items-center flex-col sm:flex-row sm:justify-between">
            <div className="font-poppins pb-6 sm:pb-0">
                <h1 className={h1Style}>DashBoard</h1>
                <h5 className={pStyle}>Welcome, {firstName}</h5>
            </div>
            <div>
                <CircleUserRound strokeWidth={1} size={100}></CircleUserRound>
            </div>
        </div>
    );
};

export default TopBar;
