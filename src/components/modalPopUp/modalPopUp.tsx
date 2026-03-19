import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { ModalPopUpStyles } from "./modalPopUp";
import AddIcon from '@mui/icons-material/Add';

type ModalPopUpProps = {
    onPlaylistCreated: () => void;
};

const ModalPopUp = ({onPlaylistCreated}:ModalPopUpProps) => {
    const { classes } = ModalPopUpStyles();
    const [openDialog, SetOpenDialog] = useState(false);
    const [playlistName, setPlaylistName] = useState("")

    const openDialogTab = () => {
        SetOpenDialog(true);
    }

    const closeDialogTab = () => {
        SetOpenDialog(false);
    }

    const createButtonClick = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5001/api/playlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: playlistName,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create playlist");
            }

            await response.json();
            setPlaylistName("");
            closeDialogTab();
            onPlaylistCreated();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button onClick={openDialogTab} color="secondary" style={{ borderRadius: 50 }} variant="outlined" startIcon={<AddIcon color="secondary"/>}> צור פלייליסט</Button>
            <Dialog open={openDialog} onClose={closeDialogTab} fullWidth maxWidth="xs" classes={{ paper: classes.dialog }}>
                <DialogTitle className={classes.title}>יצירת פלייליסט חדש</DialogTitle>
                <DialogContent>
                    <TextField label="שם הפלייליסט" variant="standard" value={playlistName} className={classes.text} onChange={(e) => setPlaylistName(e.target.value)}></TextField>
                </DialogContent>
                <DialogActions>
                    <div className={classes.buttons}>
                        <Button onClick={createButtonClick} className={classes.addButton}>צור</Button>
                        <Button onClick={closeDialogTab} className={classes.cancelButton}>ביטול</Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ModalPopUp;