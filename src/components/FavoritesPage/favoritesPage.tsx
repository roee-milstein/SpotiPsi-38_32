import type { SongTypeServer } from "../ListOfSongs/ListOfSongs";
import Song from "../Song/Song.tsx";

interface showFav{
    songsList:SongTypeServer[],
    favList:string[]
}

const FavoriteSongs = ({songsList,favList}:showFav) => {
    const showFav=songsList.filter(song=>favList.includes(song.id))
    return (
        <div className="songs">
            { showFav.map((song, index) => (
            <div key={index}>
                <Song id={song.id} name={song.name} artist={song.artist} album={song.album} isFav={true} />
            </div>
            ))}
        </div>
    );
};

export default FavoriteSongs;
