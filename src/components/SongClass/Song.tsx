
import React, { useState } from "react";
import { useStyles } from "./SongStyle";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";

export interface SongType {
    id: number,
    name: string,
    artist: string,
    album: string
};

const Song: React.FC<SongType> = (song: SongType) => {
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    let favoriteSongs = [];
    const { classes } = useStyles();
    const switchIcon = () => {
        if (isHeartClicked == false) {
            setIsHeartClicked(true);
            favoriteSongs.push(5);
        }
        else {
            setIsHeartClicked(false);
        }
    };
    return (
        <div className={classes.song}>
            <PlayArrowIcon color="secondary" />  {song.name}-{song.artist}
            <div className={classes.r}>
                <div className={classes.buttons}>
                    <div>
                        <AddIcon />
                    </div>
                    <div>
                        <IconButton onClick={switchIcon} className={classes.heart}>
                            {isHeartClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Song;

