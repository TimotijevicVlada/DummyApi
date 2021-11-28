import React, { useState, useEffect, useCallback } from "react";
import DetailsSkeleton from "./DetailsSkeleton";
import Comments from "./Comments";

const PostsDetails = ({ detailsId, APP_ID }) => {
  const [details, setDetails] = useState({ owner: {}, tags: [] });
  const [detailsLoading, setDetailsLoading] = useState(true);
  const [editPostVisibility, setEditPostVisibility] = useState(false);

  const fetchDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://dummyapi.io/data/v1/post/${detailsId}`,
        { headers: { "app-id": APP_ID } }
      );
      const data = await response.json();
      console.log(data);
      setDetails(data);
      setDetailsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [detailsId, APP_ID]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({...details, publishDate: new Date().toDateString()});
  }


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
                <button onClick={() => setEditPostVisibility(true)}>Edit post</button>
              </div>
              <form onSubmit={handleSubmit} className={editPostVisibility ? "update_post" : "update_post_visible" }>
                <input onChange={(e) => setDetails({...details, text: e.target.value})} type="text" placeholder="Change text..." />
                <button onClick={() => setEditPostVisibility(false)}>Update</button>
              </form>
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
            <Comments detailsId={detailsId} APP_ID={APP_ID}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsDetails;
