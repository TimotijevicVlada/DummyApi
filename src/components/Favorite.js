import React from "react";
import { Link } from "react-router-dom";

const Favorite = ({ favorite, deleteFav, setDetails }) => {
  console.log(favorite);
  return (
    <div className="favorite">
      {favorite.map((item) => (
        <div key={item.id} className="favorite_post">
          <div className="fav_left">
            <div className="fav_image">
              <img src={item.image} alt="" />
            </div>
            <div className="fav_author">
              <span className="fav_author_name">
                {item.owner.title} {item.owner.firstName} {item.owner.lastName}
              </span>
              <span className="fav_text">{item.text}</span>
              <span className="fav_date">{new Date(item.publishDate).toDateString()}</span>
            </div>
          </div>
          <div className="delete_btn">
            <button onClick={() => setDetails(item)} className="view_details">
                <Link to={`/${item.id}`} className="link">
                    View details
                </Link>
            </button>
            <button onClick={() => deleteFav(item)} className="delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
