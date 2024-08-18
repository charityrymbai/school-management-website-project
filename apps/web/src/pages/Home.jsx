import React from 'react';
const QuickLinks = React.lazy(() => import('../components/QuickLinks'));
const Announcements = React.lazy(
     () => import('../components/Announcements.jsx')
);
const Slideshow = React.lazy(() => import('../components/Slideshow'));
import MainContentWrappper from '../Wrappers/MainContentWrapper';
import { CardWrapper1 } from '../Wrappers/CardWrapper';
import {
     h1Style,
     pStyle,
} from '../responsive-styles-for-elements/tailwind-styles-exports';

const Home = () => {
     return (
          <div className="w-full">
               <MainContentWrappper>
                    <Slideshow />
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                         {/* Left Section */}
                         <div className="content-start p-3 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-1 sm:gap-4">
                              <QuickLinks />
                              <Announcements />
                         </div>
                         {/* MainSection */}
                         <div className="text-poppins col-span-3 p-3">
                              <CardWrapper1>
                                   <div className="sm:p-10">
                                        <h1 className={h1Style}>
                                             Welcome to Some Random Higher
                                             Secondary School, RandomPlace!
                                        </h1>
                                        <p className={pStyle}>
                                             We are delighted to welcome you to
                                             the official website of Some Random
                                             Higher Secondary School, located in
                                             the vibrant community of
                                             RandomPlace. Our institution is
                                             committed to providing an enriching
                                             educational experience that
                                             prepares students for a successful
                                             future.
                                             <br />
                                             At Some Random Higher Secondary
                                             School, we believe in the power of
                                             education to transform lives. Our
                                             dedicated faculty and staff work
                                             tirelessly to create a nurturing
                                             and stimulating environment where
                                             every student can thrive. Whether
                                             it's through our rigorous academic
                                             programs, diverse extracurricular
                                             activities, or our emphasis on
                                             character development, we strive to
                                             foster a love of learning and a
                                             spirit of curiosity in all our
                                             students.
                                             <br />
                                             Explore our website to learn more
                                             about our school’s mission, values,
                                             and the exciting opportunities we
                                             offer. From detailed information
                                             about our curriculum and
                                             state-of-the-art facilities to the
                                             latest news and events, we hope
                                             this site provides you with a
                                             comprehensive view of life at Some
                                             Random Higher Secondary School.
                                             <br />
                                             Thank you for visiting, and we look
                                             forward to partnering with you in
                                             your child’s educational journey.
                                             <br />
                                             Warm regards,
                                             <br />
                                             The Some Random Higher Secondary
                                             School Team
                                             <br />
                                        </p>
                                   </div>
                              </CardWrapper1>
                         </div>
                    </div>
               </MainContentWrappper>
          </div>
     );
};

export default Home;
