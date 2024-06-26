import CardWrapper from "../Wrappers/CardWrapper"

import {useNavigate} from 'react-router-dom'

const LoginCard = ({text, imageSrc, gotopage})=>{

    const navigate = useNavigate()

    return (
        <div 
            onClick={()=>{
                navigate(gotopage)
            }}
            className="hover:cursor-pointer text-poppins text-2xl">
            <CardWrapper>
                <img 
                    className="h-[200px]"
                    src={imageSrc}
                ></img>
                {text}
            </CardWrapper>
        </div>
    )
}

export default LoginCard