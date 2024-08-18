import React from 'react';
const TopBar2 = React.lazy(() => import('../../components/TopBar2'));

const Grades = () => {
     return (
          <div className="w-full">
               <TopBar2 Heading={'Grades'} />
          </div>
     );
};

export default Grades;
