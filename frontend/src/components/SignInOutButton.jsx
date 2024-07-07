const SignInOutButton = ({children})=>{
    return <>
        <button
            className="bg-indigo-700 hover:bg-indigo-900 text-white rounded-full py-2"
        >{children}</button>
    </>
}

export default SignInOutButton