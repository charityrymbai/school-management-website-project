export const CardWrapper1 = (props)=>{
    
    return (
        <div
            className={`w-full grid place-content-center p-5 bg-white rounded-lg shadow-xl ${props.custom}`}  
        >
            {props.children}
        </div>
    )
}

export const CardWrapper2 = (props) => {
    return (
        <div
            className={`bg-white grid place-content-center w-full h-full border-2 rounded-md p-4 ${props.custom}`}
        >
            {props.children}
        </div>
    )
}


export const CardWrapper3 = (props) => {
    return (
        <div
            className={`bg-white w-full h-full border-2 font-poppins rounded-md p-4 ${props.custom}`}
                >
            <div className="border-b-2 text-2xl pl-1">
                {props.heading}
            </div>
            <div className="m-2 p-2 h-[70%] w-full">
                {props.children}
            </div>
        </div>
    )
}

