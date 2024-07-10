

const TopBar = ({children}) => {
    return (
        <div className="border-b-2 h-[25vh] p-10 flex justify-between">
            {children}
        </div>
    )
}

export default TopBar