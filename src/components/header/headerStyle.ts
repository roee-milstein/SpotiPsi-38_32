import { makeStyles } from "tss-react/mui";

export const useStyles=makeStyles()(()=>({
    container:{
        background:"#383c3f",
        display:"flex",
        flexDirection:"row",
        justifyContent:"right",
        alignItems:"center",
        borderBottom:"2px solid purple",
        height:"10vh"
    },
    SpotiPSI:{
        color:"purple",
        height: "5vh"
    }
    
}));
