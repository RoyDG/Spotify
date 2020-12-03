import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"


const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if (_token) {
        setToken(_token)
        
        spotify.setAccessToken(_token)

        spotify.getMe().then(user => {
          console.log("", user)
        })
      }

      console.log("i have token", token)
  },[])

  return (
    <div className="App">
      {
        token ? 
          <h1>i am logged in</h1>
         : <Login></Login>
      }


    </div>
  );
}

export default App;
