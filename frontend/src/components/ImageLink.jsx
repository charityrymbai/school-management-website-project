import CardWrapper from "../Wrappers/CardWrapper"

const ImageLink = ({children, imageSrc})=>{

    return (
        <div className="hover:cursor-pointer text-poppins text-2xl">
            <CardWrapper>
                <img 
                    className="h-[200px]"
                    src={imageSrc}
                ></img>
                {children}
            </CardWrapper>
        </div>
    )
}

export default ImageLink