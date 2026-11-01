function Tweet({content,likecount}){
return(
    <>
    <div className="tweet-content">{content}</div>
    <div className="like-count">{likecount}</div>
    
    </>
)
}
export default Tweet;