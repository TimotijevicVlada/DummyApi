import React from "react";
import PostSkeleton from "./PostSkeleton";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading, setDetailsId }) => {



  return (
    <div className="posts">
      {loading ? (
        <PostSkeleton />
      ) : (
        <div className="posts_container">
          {posts.map((item) => (
            <Link to={`/${item.id}`} onClick={() => setDetailsId(item.id)} className="link" key={item.id}>
              <div className="post">
                <div className="post_image">
                  <img src={item.image} alt={item.owner.firstName} />
                </div>
                <div className="post_info">
                    <div className="title">
                      <h3>{item.tags[0]}</h3>
                    </div>
                    <div className="post_content">
                       <div className="post_text">
                      <p>{item.text}</p>
                    </div>
                    <div className="keyword">
                        <span>Keyword: {item.tags.map(word => (
                          <span key={word}>{word} / </span>
                        ))}</span>
                    </div>
                    <div className="author">
                        <span>{new Date(item.publishDate).toDateString()}</span>
                        <span>{item.owner.title} {item.owner.firstName} {item.owner.lastName}</span>
                    </div>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
