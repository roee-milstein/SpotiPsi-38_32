import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStyles } from "./sideBar";


interface songs{
  setSongsType:(type:string)=>void,
}

const SideBar = ({setSongsType}:songs) => {
  const { classes } = useStyles();
  

  return (
    <div className={classes.navigationBar}>
      <div className={classes.navigationBarItem} onClick={() => setSongsType("songs")}>
        <p className={`${classes.text}`}>כל ההודעות</p>
        <HomeIcon fontSize="medium" className={classes.button} />
      </div>

      <div className={classes.navigationBarItem} onClick={() => setSongsType("playlists")}>
        <p className={`${classes.text}`}>פלייליסטים</p>
        <LibraryMusicIcon fontSize="medium" className={classes.button}  />
      </div>

      <div className={classes.navigationBarItem} onClick={() => setSongsType("favorites")}>
        <p className={`${classes.text}`}>מועדפים</p>
        <FavoriteIcon fontSize="medium" className={classes.button} />
      </div>
    </div>
  );
};

export default SideBar;