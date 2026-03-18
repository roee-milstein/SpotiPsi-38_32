import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
    placeholder: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "end",
        padding: "10px",
        backgroundColor: " #373434",
        color: "white",
        textAlign: "center",
        borderTop: "2px solid purple",
        height: "11vh"
    }

}));

