import { CardWrapper1 } from '../Wrappers/CardWrapper';

const ImageLink = ({ children, imageSrc }) => {
    return (
        <div className="hover:cursor-pointer text-poppins text-2xl text-center">
            <CardWrapper1>
                <img className="h-[200px]" src={imageSrc}></img>
                {children}
            </CardWrapper1>
        </div>
    );
};

export default ImageLink;
