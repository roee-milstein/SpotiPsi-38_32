import './App.css'
import AllSongs from './components/AllSongs/Songs'
import SideBar from './components/sideBar/sideBar'
import Header from './header/header'
import Player from './player/playerStyle'

function App() {

  return (
    <>
      <Header />
      <SideBar/>
      <AllSongs />
      <Player />
      
    </>
  )
}

export default App
