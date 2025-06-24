import React from "react";
import Book from "./Book";

function Library(props) {
    const el = <Book name="test"></Book>
    console.log(el);

    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 자바스크립트" numOfPage={500} />
        </div>
    )
}

export default Library;