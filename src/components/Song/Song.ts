import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
    song: {
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: "1px",
        width: "77vw",
        borderBottom: "2px solid darkgray"
    },
    r: {
        marginLeft: "auto"
    },
    buttons: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        gap: "5px"
    },
    heart: {
        color: "red"
    }


}));