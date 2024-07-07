const CardWrapper = (props)=>{
    let height, width;
    if (props.height == null){
        height = "100%"
    } else {
        height = `${props.height}px`
    }
    if (props.width == null){
        width = "100%"
    } else {
        width = `${props.width}px`
    }
    return (
        <div 
            style={{
                height: height,
                width: width,
            }}
            className="grid justify-items-center p-5 my-2 rounded-lg shadow-xl bg-white"    
        >
            {props.children}
        </div>
    )
}

export default CardWrapper