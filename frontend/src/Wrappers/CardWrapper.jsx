export const CardWrapper1 = (props)=>{
    
    return (
        <div
            className="w-full grid justify-items-center p-5 m-2 rounded-lg shadow-xl bg-white"    
        >
            {props.children}
        </div>
    )
}

export const CardWrapper2 = (props) => {
    return (
        <div
            className="w-full h-full m-4 border-2 rounded-md p-4"
        >
            {props.children}
        </div>
    )
}

