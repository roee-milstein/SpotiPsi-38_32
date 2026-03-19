import type { SongTypeServer } from "../ListOfSongs/TableSongs";
import Song, { type SongType } from "../SongClass/Song";



interface showFav{
    songsList:SongTypeServer[],
    favList:string[]
}

const AllSongs = ({songsList,favList}:showFav) => {
    let showAll:SongType[]=[]
    songsList.forEach(song => {
        let fav=false
        if(favList.includes(song.id)){
            fav=true
        }
        let s:SongType={id:song.id,name:song.name,artist:song.artist,album:song.album,isFav:fav}
        showAll.push(s)
    });
    return (
        <div className="songs">
            {showAll.map((song, index) => (
            <div key={index}>
                <Song id={song.id} name={song.name} artist={song.artist} album={song.album} isFav={song.isFav} />
            </div>
            ))}
        </div>
    );
};

export default AllSongs;
