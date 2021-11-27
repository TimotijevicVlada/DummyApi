import React, { useState, useEffect, useCallback } from "react";
import DetailsSkeleton from "./DetailsSkeleton";

const PostsDetails = ({ detailsId, APP_ID }) => {
  const [details, setDetails] = useState({ owner: {}, tags: [] });
  const [comments, setComments] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(true);

  const fetchDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://dummyapi.io/data/v1/post/${detailsId}`,
        { headers: { "app-id": APP_ID } }
      );
      const data = await response.json();
      setDetails(data);
      console.log(data);
      setDetailsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [detailsId, APP_ID]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const fetchComments = useCallback(async () => {
    const res = await fetch(
      `https://dummyapi.io/data/v1/post/${detailsId}/comment`,
      { headers: { "app-id": APP_ID } }
    );
    const results = await res.json();
    console.log(results.data);
    setComments(results.data);
  }, [APP_ID, detailsId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="post_details">
      {detailsLoading ? (
        <DetailsSkeleton />
      ) : (
        <div className="post_details_wrapper">
          <div className="details_image">
            <img src={details.image} alt="post_image" />
          </div>
          <div className="details_info">
            <div className="details_info_upper">
              <div className="details_title">
                <h1>{details.tags ? details.tags[0] : ""}</h1>
              </div>
              <div className="details_fulltext">
                <p>{details.text}</p>
              </div>
              <div className="details_author">
                <img src={details.owner.picture} alt="" />
                <span>{details.owner.title} </span>
                <span className="author_name">{details.owner.firstName} </span>
                <span className="author_name">{details.owner.lastName}</span>
              </div>
              <div className="details_likes">
                <i className="fas fa-heart"></i>
                <span>{details.likes}</span>
              </div>
              <div className="details_tags">
                <div>
                  {details.tags.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="details_data">
                <span>{new Date(details.publishDate).toDateString()}</span>
              </div>
            </div>
            <div className="details_comments">
              <h3>Comments</h3>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
