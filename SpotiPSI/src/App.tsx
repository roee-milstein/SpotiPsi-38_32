import './App.css'
import Header from './components/header/header'
import Player from './components/player/playerStyle.tsx'
import SideBar from './components/sideBar/sideBar'
import AllSongs from './components/ListOfSongs/Songs.tsx'

function App() {


  return (
    <>
      <div>
        <Header />
      </div>
      <div className='mainContent'>
        <div>
          <AllSongs type='songs'/>
        </div>
        <div>
          <SideBar />
        </div>
      </div>
      <div>
        <Player />
      </div>
    </>
  )
}

export default App
