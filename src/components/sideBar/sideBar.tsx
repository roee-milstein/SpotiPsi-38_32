import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStyles } from "./sideBarStyles";


interface songs{
  setSongsType:(type:string)=>void,
}

const SideBar = ({setSongsType}:songs) => {
  const { classes } = useStyles();

  return (
    <div className={classes.navigationBar}>
      <div className={classes.navigationBarItem}>
        <p className={`${classes.text}`}>כל ההודעות</p>
        <HomeIcon fontSize="medium" className={classes.button} />
      </div>

      <div className={classes.navigationBarItem}>
        <p className={`${classes.text}`}>פריטים שנשמרו</p>
        <LibraryMusicIcon fontSize="medium" className={classes.button} />
      </div>

      <div className={classes.navigationBarItem}>
        <p className={`${classes.text}`}>מועדפים</p>
        <FavoriteIcon fontSize="medium" className={classes.button} />
      </div>
    </div>
  );
};

export default SideBar;