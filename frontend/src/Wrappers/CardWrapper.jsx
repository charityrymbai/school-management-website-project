import PropTypes from 'prop-types';
import {
    h2Style,
    pStyle,
} from '../responsive-styles-for-elements/tailwind-styles-exports';

export const CardWrapper1 = (props) => {
    return (
        <div
            className={`w-full h-full grid place-content-center p-5 sm:p-10 bg-white rounded-3xl shadow-xl border-2 ${props.custom}`}
        >
            {props.children}
        </div>
    );
};

export const CardWrapper2 = (props) => {
    return (
        <div
            className={`bg-white grid place-content-center w-full h-full border-2 rounded-3xl p-4 my-3 shadow-md ${props.custom}`}
        >
            {props.children}
        </div>
    );
};

export const CardWrapper3 = (props) => {
    return (
        <div
            className={`bg-white w-full h-full border-2 font-poppins rounded-3xl p-4 shadow-md ${props.custom}`}
        >
            <div className={'border-b-2 pl-1 ' + h2Style}>{props.heading}</div>
            <div className={'m-2 p-2 h-[70%] w-full ' + pStyle}>
                {props.children}
            </div>
        </div>
    );
};

export const CardWrapper4 = (props) => {
    return (
        <div
            className={`bg-white w-full h-full border-2 rounded-3xl p-5 my-3 shadow-md overflow-auto ${props.custom}`}
        >
            {props.children}
        </div>
    );
};

CardWrapper1.propTypes = {
    custom: PropTypes.string,
    children: PropTypes.node.isRequired,
};

CardWrapper2.propTypes = {
    custom: PropTypes.string,
    children: PropTypes.node.isRequired,
};

CardWrapper3.propTypes = {
    custom: PropTypes.string,
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

CardWrapper4.propTypes = {
    custom: PropTypes.string,
    children: PropTypes.node.isRequired,
};
