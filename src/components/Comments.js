import React, {useState, useEffect, useCallback} from 'react';

const Comments = ({APP_ID, detailsId}) => {

    const [comments, setComments] = useState([]);
    const [commentVisibility, setCommentVisibility] = useState(false);


    //Function that fetch the comment for each post
    const fetchComments = useCallback(async () => {
        const res = await fetch(
          `https://dummyapi.io/data/v1/post/${detailsId}/comment`,
          { headers: { "app-id": APP_ID } }
        );
        const results = await res.json();
        setComments(results.data);
      }, [APP_ID, detailsId]);
    
      useEffect(() => {
        fetchComments();
      }, [fetchComments]);


    return (
        <div className="details_comments">
              <div className="comment_header">
                   <h3>Comments</h3>
                   <button onClick={() => setCommentVisibility(true)}>Add new comment</button>
              </div>
              <form className={commentVisibility ? "add_comment" : "comment_unvisible"}>
                    <input type="text" placeholder="Add your comment..."/>
                    <span className="add" onClick={() => setCommentVisibility(false)}>Post</span>
              </form>
              {comments.length < 1 ? (
                <h3>There is no comment yet..</h3>
              ) : (
                comments.map((item) => (
                  <div className="comment" key={item.id}>
                    <div className="comment_info">
                      <div className="comment_pic">
                        <img
                          src={item.owner.picture}
                          alt={item.owner.firstName}
                        />
                      </div>
                      <div className="comment_time_name">
                        <span>
                          {item.owner.title} {item.owner.firstName}{" "}
                          {item.owner.lastName}
                        </span>
                        <span className="comment_date">
                          {new Date(item.publishDate).toDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="comment_msg">
                      <p>{item.message}</p>
                    </div>
                  </div>
                )))}
            </div>
    )
}

export default Comments;
