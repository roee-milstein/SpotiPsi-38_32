import { useStyles } from "./Playlists";

export interface PlaylistType {
    id: number,
    name: string,
    songIds: string[]
};

type PlayListProps = {
    playlist: PlaylistType;
}

const Playlist: React.FC<PlayListProps> = ({ playlist }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.playlist}>
            <h3>{playlist.name}</h3>
            <p > {playlist.songIds.length} שירים</p>
        </div>
    );
}

export default Playlist;