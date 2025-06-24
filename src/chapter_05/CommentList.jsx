import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요"
    },
    {
        name: "유재석",
        comment: "유퀴즈"
    },
    {
        name: "조세호",
        comment: "유퀴즈"
    },
]

function CommentList(props) {
    return (
        <div>
            {
                // comments.map(() => {})
                // comments.map(() => { return (<Comment/>) })
                comments.map((item) => { 
                    return (
                        <Comment name={item.name} comment={item.comment}/>
                    ) 
                })
            }
        </div>
    )
}

export default CommentList;