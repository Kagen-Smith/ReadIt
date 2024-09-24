import { BookData } from "../interfaces/bookData.js";
import React from "react";

interface BookmarkProps {
    wantToRead: BookData[];
    removeFromStorage: 
        | ((
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          currentlyOnShelf: boolean | null | undefined,
          currentlyReading: boolean | null | undefined,
          title: string | null
         ) => void)
        | null;
}

const Bookmark =  ({
    wantToRead,
    removeFromStorage,

}: BookmarkProps) => {
    console.log
    return (
        <div>
            <h2>Bookmarks</h2>
            <ul>
                {wantToRead.map((BookData) => (
                    <li key={BookData.id}>
                         <h3>{BookData.title}</h3>
                            <p>{BookData.author}</p>
                            <button
                             onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => removeFromStorage && removeFromStorage(e, false, false, BookData.title)}
                            >
                             Remove
                            </button>
                    </li>
                ))}    
            </ul>
        </div>
    )
}

export default Bookmark;
