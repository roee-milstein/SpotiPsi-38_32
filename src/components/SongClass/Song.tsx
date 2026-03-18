
import React from "react";
import { useStyles } from "./SongStyle";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';

export interface SongType {
    id:number,
    name:string,
    artist:string,
    album:string
    

};

const Song: React.FC<SongType> = (song:SongType) => {
    const { classes } = useStyles(); 
    return (
        <div className={classes.song}>
            <PlayArrowIcon color="secondary"/>  {song.name}-{song.artist}
            <div className={classes.r}>
                <AddIcon/><FavoriteBorderIcon/>
            </div>

        </div>
    );
};

export default Song;

