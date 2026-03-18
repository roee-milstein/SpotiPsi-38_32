import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStyles } from "./sideBarStyles";


const SideBar = () => {

  const { classes } = useStyles();

  return (
    <div className={classes.navigationBar}>
      <div className={classes.navigationBarItem}>
        <p className={classes.center}>כל ההודעות</p>
        <HomeIcon fontSize="medium" className="button" />
      </div>

      <div className={classes.navigationBarItem}>
        <p className={classes.center}>פריטים שנשמרו</p>
        <LibraryMusicIcon fontSize="medium" className="button" />
      </div>

      <div className={classes.navigationBarItem}>
        <p className={classes.center}>מועדפים</p>
        <FavoriteIcon  fontSize="medium" className="button" />
      </div>
    </div>
  );
};

export default SideBar;