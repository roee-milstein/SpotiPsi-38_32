import React from "react";
import { useStyles } from "./Player.ts";

const Player: React.FC = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.placeholder}>
            <p>נגן שירים</p>

        </div>
    );
};

export default Player;
