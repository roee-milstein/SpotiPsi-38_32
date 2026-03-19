import { useEffect, useState } from "react";
import Playlist, { type PlaylistType } from "../Playlists/Playlists.tsx";
import { useStyles } from "./playListPage.ts";
import ModalPopUp from "../modalPopUp/modalPopUp.tsx";

const PlaylistsPage = () => {
    const {classes}=useStyles();
    const [listOfPlayList, setListOfPlayLists] = useState<PlaylistType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const fetchPlaylists = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:5001/api/playlists");
            const newPlayList = await response.json();

            setListOfPlayLists(newPlayList);
        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            return;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);
    
    return (
        <div>
            <div className={classes.top}>
                <ModalPopUp onPlaylistCreated={fetchPlaylists} />
                <h1>הפלייליסטים שלי</h1>
            </div>
            <div>
                {isLoading && <p>Loading...</p>}

                {error && <p>{error}</p>}

                {!isLoading && !error && listOfPlayList.map((playListData, index) => (

                    <div key={index}>
                        <Playlist playlist={playListData}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaylistsPage;
