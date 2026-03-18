import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles({ name: "SideBar" })(() => ({
  navigationBar: {
    display: "flex",
    flexDirection: "column",
    padding: "3vh",
    height: "100vh",
    color: "white",
    fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
  },

  navigationBarItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "15vw",
    color:"white",

    "&:hover": {
      backgroundColor: "purple",
    },
  },

  text: {
    fontSize: "14px",
    color: "lightgray",
    display: "block",
    padding: "12px",
    textDecoration: "none",
  },

  center: {
    display: "flex",
    paddingRight: "3vw",
    color:"white"
  },
}));