import './App.css'
import Header from './components/header/header'
import Player from './components/player/playerStyle'
import Song from './components/SongClass/Song'

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
