import React, {useState, useEffect} from 'react';
import './style/App.css';
import Posts from './components/Posts';
import PostsDetails from './components/PostsDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const APP_ID = "61a113efd238b67ee530d34b";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailsId, setDetailsId] = useState("");

  const fetchData = async () => {
    try {
        const response = await fetch(`https://dummyapi.io/data/v1/post`, {headers: {'app-id': APP_ID}});
        const data = await response.json();
        setPosts(data.data)
        console.log(data.data)
        setLoading(false);
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts posts={posts} loading={loading} setDetailsId={setDetailsId}/>}/>
          <Route path="/:id" element={<PostsDetails detailsId={detailsId} APP_ID={APP_ID}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
