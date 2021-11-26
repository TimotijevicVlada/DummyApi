import React, { useState, useEffect } from "react";

const PostsDetails = ({ detailsId, APP_ID }) => {
  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://dummyapi.io/data/v1/post/${detailsId}`,
        { headers: { "app-id": APP_ID } }
      );
      const data = await response.json();
      console.log(data);
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="post_details">
      <img src={details.image} alt="" />
    </div>
  );
};

export default PostsDetails;
