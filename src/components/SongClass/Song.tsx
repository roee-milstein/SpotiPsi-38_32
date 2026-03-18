import React from "react";
import { useStyles } from "./SongStyle";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';

interface SongType {
    songName: string,
    singerName: string,


};

const Song: React.FC<SongType> = (song: SongType) => {
    const { classes } = useStyles();
    return (
        <div className={classes.song}>
            <PlayArrowIcon color="secondary" />  {song.songName}-{song.singerName}
            <div className={classes.r}>
                <AddIcon /><FavoriteBorderIcon />
            </div>

        </div>
    );
};

export default Song;

