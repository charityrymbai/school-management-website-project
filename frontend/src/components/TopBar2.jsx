import { CircleUserRound } from 'lucide-react';
import { h1Style, pStyle } from '../responsive-styles-for-elements/tailwind-styles-exports';

const TopBar2 = ({Heading})=>{
    return (
        <div className="w-full border-b-2 h-fit p-10 flex items-center flex-col sm:flex-row sm:justify-between">
            <div className="font-poppins pb-6 sm:pb-0">
                <h1 className={h1Style}>{Heading}</h1>
            </div>
        </div>
    )
}

export default TopBar2