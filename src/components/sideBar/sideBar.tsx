import "./sideBar.css";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
const SideBar = () => {
  return (
    <div id="navigationBar">
      <div className="navigationBarItem">
        <p id="center">כל ההודעות</p>
        <HomeIcon/>
      </div>

      <div className="navigationBarItem">
        <p id="center">פריטים שנשמרו</p>
        <LibraryMusicIcon />
      </div>

      <div className="navigationBarItem">
        <p id="center">מועדפים</p>
       <FavoriteIcon />
      </div>
    </div>
  );
};

export default SideBar;