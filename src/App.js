import React, {useState, useEffect} from 'react';
import './style/App.css';
import Users from './components/Users';

function App() {

  const APP_ID = "61a113efd238b67ee530d34b";


  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyapi.io/data/v1/user`, {headers: {'app-id': APP_ID}});
      const data = await response.json();
      console.log(data);
      setUsers(data.data)
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="App">
      <h1>DummyApi</h1>
      <Users users={users}/>
    </div>
  );
}

export default App;
