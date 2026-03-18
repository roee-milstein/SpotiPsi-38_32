import React from "react";
import { useStyles } from "./headerStyle";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Header: React.FC = () => {
    const { classes } = useStyles(); 

    return (
        <div className={classes.container}>
            <h1 dir="rtl" className={classes.SpotiPSI}>
                <MusicNoteIcon /> SpotiPSI
            </h1>
        </div>
    );
};

export default Header;
