const CardWrapper = (props)=>{
    return (
        <div 
            style={{
                height: `${props.height}px`
            }}
            className="grid justify-items-center p-5 m-4 rounded-lg shadow-xl bg-gray-100"    
        >
            {props.children}
        </div>
    )
}

export default CardWrapper