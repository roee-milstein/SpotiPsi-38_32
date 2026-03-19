import { makeStyles } from "tss-react/mui";

export const useStyles=makeStyles()(()=>({
    playlist:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"start",
        alignItems:"start",
        width: "73vw",
        padding:"0 2vw",
        borderBottom: "2px solid darkgray",
        color:"white",
        height:"15vh",
    },
}))