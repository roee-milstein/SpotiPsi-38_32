import { makeStyles } from "tss-react/mui";

export const useStyles=makeStyles()(()=>({

    top:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        color:"white",
        padding:"1vw",
        gap:"50vw"
    }
}))