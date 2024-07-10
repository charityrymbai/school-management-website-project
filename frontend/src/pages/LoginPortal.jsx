import { useParams } from "react-router-dom"

import MainContentWrappper from "../Wrappers/MainContentWrapper";
import { CardWrapper1 } from "../Wrappers/CardWrapper";
import Heading1 from "../components/Heading1"
import SignInOutButton from "../components/SignInOutButton"
import TextLink from "../components/TextLink"

const LoginPortal = () =>{
    const params = useParams();

    return <>
        <MainContentWrappper>
            <div className="flex justify-center">
                <CardWrapper1 width={300}>
                    <div className="grid grid-cols-1 w-[200px]">
                        <Heading1>Welcome {params.user}s!!</Heading1>
                        <input 
                            className="p-2 h-10 border-2 border-gray-400 rounded-md my-5" 
                            placeholder="Roll Number"
                            ></input>
                        <input 
                            className="p-2 h-10 border-2 border-gray-400 rounded-md" 
                            placeholder="Date of Birth"
                            type="date" 
                            min="1960-01-01"
                            ></input>
                        <TextLink href="#">Forgot Password?</TextLink>
                        <SignInOutButton>Sign in</SignInOutButton>
                    </div>
                </CardWrapper1>
            </div>
        </MainContentWrappper>
    </>
}

export default LoginPortal