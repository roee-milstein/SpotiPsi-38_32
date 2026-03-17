import './App.css'
import Header from './header/header'
import Player from './player/playerStyle'
import Song from './SongClass/Song'

function App() {

  return (
    <>
      <Header />
      <Song singerName='altman' songName='hapoel'/>
      <Song singerName='altman' songName='hapoel'/>
      <Player />
      
    </>
  )
}

export default App
