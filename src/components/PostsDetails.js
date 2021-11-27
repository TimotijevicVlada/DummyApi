import React, { useState, useEffect, useCallback } from "react";

const PostsDetails = ({ detailsId, APP_ID }) => {

  const [details, setDetails] = useState([]);

  const fetchDetails = useCallback( async () => {
    try {
      const response = await fetch(
        `https://dummyapi.io/data/v1/post/${detailsId}`,
        { headers: { "app-id": APP_ID } }
      );
      const data = await response.json();
      
      setDetails(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, [detailsId, APP_ID]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div className="post_details">
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
            <span>Tags: {details.tags.map(item => (<span>{item}/</span>))}</span>
          </div>
          <div className="details_data">
              <span>{new Date(details.publishDate).toDateString()}</span>
          </div>
        </div>
        <div className="details_comments"> 

        </div>
      </div>
    </div>
  );
};

export default PostsDetails;
