import React, {useState, useEffect, useCallback} from 'react';
import './style/App.css';
import Posts from './components/Posts';
import PostsDetails from './components/PostsDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorite from './components/Favorite';
import NewPost from './components/NewPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const APP_ID = "61a113efd238b67ee530d34b";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [detailsId, setDetailsId] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [favoriteNumber, setFavoriteNumber] = useState(0);

  //Function that fetch posts from API
  const fetchData = async () => {
    try {
        const response = await fetch(`https://dummyapi.io/data/v1/post`, {headers: {'app-id': APP_ID}});
        const data = await response.json();
        setPosts(data.data)
        setLoading(false);
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    fetchData();
  }, [])

  //Function to delete post from favorite
  const deleteFav = (post) => {
    const deletePost = favorite.filter(item => item.id !== post.id);
    setFavorite(deletePost);
  }

  //Function that display total favorite number in the navbar
  const displayTotalFavNum = useCallback( () => {
    setFavoriteNumber(favorite.length);
  }, [favorite])
  
  useEffect(() => {
    displayTotalFavNum();
  }, [displayTotalFavNum])

  //Function that get local storage info and send to favorite state
  const getFavoriteItem = () => {
    if(localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", JSON.stringify([]));
    } else {
      const favLocalStorage = JSON.parse(localStorage.getItem("posts"));
      setFavorite(favLocalStorage);
    }
  }

  useEffect(() => {
    getFavoriteItem();
  }, [])

  //Function that save favorite item to locale storage
  const saveFavoriteLocaleStorage = useCallback( () => {
    localStorage.setItem("posts", JSON.stringify(favorite));
  }, [favorite])

  useEffect(() => {
    saveFavoriteLocaleStorage();
  }, [saveFavoriteLocaleStorage])

  return (
    <Router>
      <div className="App">
        <Navbar favoriteNumber={favoriteNumber}/>
        <Routes>
          <Route path="/" element={<Posts posts={posts} loading={loading} setDetailsId={setDetailsId}/>}/>
          <Route path="/:id" element={<PostsDetails setFavoriteNumber={setFavoriteNumber} details={details} setDetails={setDetails} detailsId={detailsId} APP_ID={APP_ID} favorite={favorite} setFavorite={setFavorite}/>}/>
          <Route path="/favorite" element={<Favorite favorite={favorite} deleteFav={deleteFav} setDetailsId={setDetailsId}/>}/>
          <Route path="/newpost" element={<NewPost/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
