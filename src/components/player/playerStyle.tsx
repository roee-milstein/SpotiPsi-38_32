import React from "react";
import { useStyles } from "./playerSyle";

const Player: React.FC = () => {
    const { classes } = useStyles(); 
    return (
        <div className={classes.placeholder}>
            <p>נגן שירים</p>
            
        </div>
    );
};

export default Player;
