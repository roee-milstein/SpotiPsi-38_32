import React, { useState } from "react";
import { useStyles } from "./Song";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";

export interface SongType {
    id: string,
    name: string,
    artist: string,
    album: string,
    isFav:boolean,
};

const Song: React.FC<SongType> = (song: SongType) => {
    const [isHeartClicked, setIsHeartClicked] = useState(song.isFav);


    const { classes } = useStyles();

    const addSong = async (click:string) => {
        const response = await fetch(`http://127.0.0.1:5001/api/favorites/${click}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({songId:song.id}),
        });
};



    const switchIcon = () => {
        if (isHeartClicked==false){
            setIsHeartClicked(true);
            addSong("add")
        }
        else{
            setIsHeartClicked(false);
            addSong("remove")
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