import {useNavigate} from 'react-router-dom'

const NavigatePageLink = ({gotopage,children})=>{

    const navigate = useNavigate()
    
    return(
        <>
            <button
                onClick={()=>{
                    navigate(gotopage)
                }}
            >{children}</button>
        </>
    )
}

export default NavigatePageLink