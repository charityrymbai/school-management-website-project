const TextLink = ({children, href})=>{
    return <>
        <a
            className="py-4 text-indigo-700"
            href={href}
        >{children}</a>
    </>
}

export default TextLink