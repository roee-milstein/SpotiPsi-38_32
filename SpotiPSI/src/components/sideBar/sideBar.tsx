import "./sideBar.css";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStyles } from "./sideBarStyles";


const SideBar = () => {

  const {classes} =useStyles()
  
  return (
    <div id="navigationBar">
      <div className={classes.navigationBarItem}>
        <p id="center">כל ההודעות</p>
        <HomeIcon fontSize="medium" className="button" />
      </div>

      <div className={classes.navigationBarItem}>
        <p id="center">פריטים שנשמרו</p>
        <LibraryMusicIcon fontSize="medium" className="button" />
      </div>

      <div className={classes.navigationBarItem}>
        <p id="center">מועדפים</p>
        <FavoriteIcon fontSize="medium" className="button" />
      </div>
    </div>
  );
};

export default SideBar;