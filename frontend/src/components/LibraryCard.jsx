import { CardWrapper3 } from "../Wrappers/CardWrapper"

const LibraryCard = ({content}) => {
    const pendingBooks = content
    return (
        <CardWrapper3 heading="Library Books">
            <ul className="list-disc">
                {
                    (pendingBooks.length>0)?
                        (pendingBooks.map((book, index)=>{
                            return (
                                <li key={index}>
                                    <h1>{book.bookDetail.bookName}</h1>
                                    <h4>Due: {new Date(book.dueDate).toLocaleDateString("en-GB", {day:'2-digit', month:'2-digit', year:'numeric'})}</h4>
                                </li>
                            )
                        }))
                    : 
                        "No Pending Books"
                
                }
            </ul>
        </CardWrapper3>
    )
}

export default LibraryCard