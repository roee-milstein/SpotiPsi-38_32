import './App.css'
import Header from './components/header/header'
import Player from './components/player/playerStyle.tsx'
import SideBar from './components/sideBar/sideBar'
import AllSongs from './components/ListOfSongs/Songs.tsx'
import FavoriteSongs from './components/FavoritesPage/favoritesPage.tsx'
import PlaylistsPage from './components/PlayListsPage/playlistspage.tsx'
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='mainContent'>
        <div className='songs'>
          <PlaylistsPage />
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

export default App;
