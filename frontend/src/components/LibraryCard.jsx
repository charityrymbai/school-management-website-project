import { CardWrapper3 } from "../Wrappers/CardWrapper"

const LibraryCard = () => {
    const pendingBooks = [
        {
            name: "Book 1",
            dateTaken: new Date(2024, 11, 12), 
            dateToReturn: new Date(2024, 11, 21)
        },{
            name: "Book 2",
            dateTaken: new Date(2024, 1, 12), 
            dateToReturn: new Date(2024, 1, 21)
        }
    ]
    return (
        <CardWrapper3 heading="Library Books">
            <ul className="list-disc">
                {pendingBooks.map((book, index)=>{
                    return (
                        <li key={index}>
                            <h1>{book.name}</h1>
                            <h4>{book.dateToReturn.toLocaleDateString()}</h4>
                        </li>
                    )
                })}
            </ul>
        </CardWrapper3>
    )
}

export default LibraryCard