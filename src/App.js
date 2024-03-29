import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login.jsx'
import { useStateProvider } from './utils/StateProvider.js'
import { reducerCases } from './utils/Constants.js';
import Spotify from './components/Spotify.jsx';

const App = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash){
      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({type:reducerCases.SET_TOKEN, token})
    }
  }, [token, dispatch])
  
  return (
    <div>
      {
        token ? <Spotify /> : <Login />
      }
    </div>
  )
}

export default App
