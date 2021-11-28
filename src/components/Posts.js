import React from "react";
import PostSkeleton from "./PostSkeleton";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading, setDetailsId }) => {

  return (
    <div className="posts">
      <div className="title">
        <h2>Posts</h2>
        <button>Add new post</button>
      </div>
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
                        <div>{item.tags.map(word => (
                          <span className="tags" key={word}>{word}</span>
                        ))}</div>
                    </div>
                    <div className="likes">
                      <i className="fas fa-heart"></i>
                      <span>{item.likes}</span>
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
