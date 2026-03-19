import { makeStyles } from "tss-react/mui";
export const ModalPopUpStyles=makeStyles()(()=>({
    dialog:{
        backgroundColor:"#424242",
        color:"white"
    },
    title:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"end"
    },
    text:{
        width:"100%",
    },
    buttons:{
        paddingRight:"45vh"
    },
    cancelButton:{
        color:"purple"
    },
    addButton:{
        color:"#8A8A8A"
    }
}))