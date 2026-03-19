import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles({ name: "SideBar" })(() => ({
  navigationBar: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "right",
    alignItems: "center",
    padding: "1.5vh",
    height: "320vh",
    width: "17vw",
    color: "white",
    fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
    borderLeft: "2px solid purple",
  },

  navigationBarItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10vh",
    width: "17vw",

    "&:hover": {
      backgroundColor: "purple",
    },
  },

  text: {
    fontSize: "16px",
    color: "lightgray",
    textDecoration: "none",
    margin: 0,
    flex: 1,
    textAlign: "center",
  },

  button: {
    color: "lightgray",
  },
}));