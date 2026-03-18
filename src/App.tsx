import './App.css'
import Header from './components/header/header'
import Player from './components/player/playerStyle.tsx'
import Song from './components/SongClass/Song'
import SideBar from './components/sideBar/sideBar'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='mainContent'>
        <div>
          <Song singerName='altman' songName='hapoel' />
          <Song singerName='altman' songName='hapoel' />
          <Song singerName='altman' songName='hapoel' />
          <Song singerName='altman' songName='hapoel' />
          <Song singerName='altman' songName='hapoel' />
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
