
import { useEffect, useState } from "react";
import type { SongType } from "../SongClass/Song";
import Song from "../SongClass/Song";

// songs type. we use it to know that songs to show
interface SongsCollection {
    type:string , // can be favorit or songs (all) 
    arr:SongType[]
}


const SongTable = (type:SongsCollection) => {
    const [songsList, setSongsList] = useState<SongType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const showFav=async(song:SongType)=>{
        const response = await fetch(`http://127.0.0.1:5001/api/${type}`);
        const data = await response.json();
        if(song.id in data)
            return true
        return false
    }

    const fetchSongs = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(`http://127.0.0.1:5001/api/${type}`);
        const data = await response.json();

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
        fetchSongs();
    }, []);

    return (
        <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && songsList.map((song, index) => (
            
            <div key={index}>
                <Song id={song.id} name={song.name} artist={song.artist} album={song.album}/>
            </div>
        ))}
        </div>
    );
};


export default SongTable;
