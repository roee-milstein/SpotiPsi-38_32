import './App.css'
import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'
import SideBar from './components/SideBar/sideBar.tsx'
import { useState } from 'react'
import SongTable from './components/ListOfSongs/ListOfSongs.tsx'

function App() {
  const [songsType, setSongsType] = useState("songs");
  const [songsList,setSongsList]=useState([])

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='mainContent'>
        <div className='songs'>
          <SongTable type={songsType} setSongs={setSongsList} />
        </div>
        <div>
          <SideBar setSongsType={setSongsType}/>
        </div>
      </div>
      <div>
        <Player />
      </div>
    </>
  )
}

export default App;
