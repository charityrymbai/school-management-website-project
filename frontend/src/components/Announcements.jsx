import { CardWrapper1 } from '../Wrappers/CardWrapper';
import {
    cardNormal,
    cardHeading,
} from './../responsive-styles-for-elements/tailwind-styles-exports';

import Line from './Line';
import './Announcements.css';

const Announcements = () => {
    return (
        <div>
            <CardWrapper1>
                <div className="text-left text-inter ">
                    <h1 className={cardHeading}>Announcements</h1>
                    <Line thick={2}></Line>
                    <div>
                        <ul className={'list-disc list-inside  ' + cardNormal}>
                            <li className="relative hover-item hover:text-[#990011]">
                                Back-to-School Night
                                <div className="hover-box">
                                    Join us for Back-to-School Night on August
                                    25th from 6 PM to 8 PM. Meet teachers,
                                    explore classrooms, and learn about the
                                    exciting year ahead!
                                </div>
                            </li>
                            <li className="relative hover-item hover:text-[#990011]">
                                Fall Sports Registration
                                <div className="hover-box">
                                    Fall sports registration is open until
                                    August 20th. Sign up for football, soccer,
                                    volleyball, and cross country. Visit the
                                    athletics page for details.
                                </div>
                            </li>
                            <li className="relative hover-item hover:text-[#990011]">
                                Picture Day
                                <div className="hover-box">
                                    School Picture Day is scheduled for
                                    September 10th. Ensure your child is dressed
                                    appropriately. Order forms will be sent home
                                    this week.
                                </div>
                            </li>
                            <li className="relative hover-item hover:text-[#990011]">
                                PTA Meeting
                                <div className="hover-box">
                                    The first PTA meeting of the year will be
                                    held on September 5th at 7 PM in the school
                                    library. All parents are welcome to attend
                                    and get involved!
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </CardWrapper1>
        </div>
    );
};

export default Announcements;
