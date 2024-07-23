import { Link } from 'react-router-dom';

import MainContentWrappper from '../Wrappers/MainContentWrapper';
import ImageLink from '../components/ImageLink';
import { studentLogo, teacherLogo } from '../../public/images/photosExports';

const Login = () => {
    return (
        <MainContentWrappper>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <Link to={`${'Teacher'}`}>
                        <ImageLink imageSrc={teacherLogo}>
                            Teacher's Login
                        </ImageLink>
                    </Link>
                    <Link to={`${'Student'}`}>
                        <ImageLink imageSrc={studentLogo}>
                            Student's Login
                        </ImageLink>
                    </Link>
                </div>
            </div>
        </MainContentWrappper>
    );
};

export default Login;
