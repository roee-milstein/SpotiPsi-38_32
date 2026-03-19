
import { useEffect, useState } from "react";
import FavoriteSongs from "../FavoritesPage/FavoritesPage";
import AllSongs from "../AllSongs/AllSongs";
import PlaylistsPage from "../PlayListsPage/playlistspage";

// songs type. we use it to know that songs to show
interface SongsCollection {
    type:string , // can be favorite or songs (all) 
    setSongs:(arr:[])=>void
}

export interface SongTypeServer{
    id: string,
    name: string,
    artist: string,
    album: string,
}

const SongTable = ({ type ,setSongs}: SongsCollection) => {
    const [songsList, setSongsList] = useState<SongTypeServer[]>([]);
    const [favList, setFavList] = useState<[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const fetchFacSongs = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(`http://127.0.0.1:5001/api/favorites`);
        const data = await response.json();
        setFavList(data)
        } catch (error) {
        setError("Something went wrong");
        console.error(error);
        return;
        } finally {
        setIsLoading(false);
        }
    };

    const fetchSongs = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(`http://127.0.0.1:5001/api/songs`);
        const data = await response.json();
        if(type=="songs"){
            setSongs(data)
        }
        setSongsList(data);
        } catch (error) {
        setError("Something went wrong");
        console.error(error);
        return;
        } finally {
        setIsLoading(false);
        }
    };


    useEffect(() => {
        console.log(type)
        if(type=="playlists"){
            }
        else{
            fetchFacSongs();
            fetchSongs();
        }
    }, [type]);

    return (
        <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && type=="songs"&& <AllSongs songsList={songsList} favList={favList}/>}
        {!isLoading && !error && type=="favorites"&&<FavoriteSongs songsList={songsList} favList={favList}/>}
        {!isLoading && !error && type=="playlists"&&<PlaylistsPage/>}
        </div>
    );
};


export default SongTable;
