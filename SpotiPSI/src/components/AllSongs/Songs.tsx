import { useEffect, useState } from "react";
import type { SongType } from "../SongClass/Song";
import Song from "../SongClass/Song";

// songs type. we use it to know that songs to show
interface SongsCollection {
    type:string  // can be favorit or songs (all) 
}


const AllSongs = (type:SongsCollection) => {
    const [songsList, setSongsList] = useState<SongType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    //check if song is on favorit list
    const showFav=async(song:SongType)=>{
        const response = await fetch(`http://127.0.0.1:5001/api/${type}`);
        const data = await response.json();
        if(song.id in data)
            return true
        return false
    }


    // יצירת פונקציה אסינכרונית לשליפת שירים והצגתם בסטייט
    const fetchSongs = async () => {
        // הגדרת התחלת טעינה של שירים
        setIsLoading(true);
        try {
        // גישה לשרת
        const response = await fetch(`http://127.0.0.1:5001/api/songs`);
        const data = await response.json();

        // הוספת שירים לסטייט לאחר שהתקבלו מהשרת
        setSongsList(data);
        } catch (error) {
        // הגדרת שגיאה בגישה לשרת
        setError("Something went wrong");
        console.error(error);
        return;
        } finally {
        // הגדרת סוף הטעינה של שירים
        setIsLoading(false);
        }
    };

    // קריאה לשירים מהשרת רק בעלייה ראשונה של הקומפוננטה
    // תזכורת: כאשר נקרא ל-API אנו נעשה זאת ב-useEffect זה אומר שהקוד ירוץ
    // רק ברינדור הראשון של הקומפוננטה
    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div>
        {/* הצגת טקסט טעינה במידה והנתונים עדיין לא נטענו */}
        {isLoading && <p>Loading...</p>}

        {/* הצגת שגיאה במידה וקרתה שגיאה בגישה לשרת */}
        {error && <p>{error}</p>}

        {/* הצגת השירים במידה והטעינה הסתיימה ואין שגיאה */}

        {!isLoading && !error && songsList.map((song, index) => (
            
            <div key={index}>
                <Song id={song.id} name={song.name} artist={song.artist} album={song.album}/>
            </div>
        ))}
        </div>
    );
};

export default AllSongs;
