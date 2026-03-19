import './App.css'
import Header from './components/header/header'
import Player from './components/player/playerStyle.tsx'
import SideBar from './components/sideBar/sideBar'
import { useState } from 'react'
import SongTable from './components/ListOfSongs/TableSongs.tsx'

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
