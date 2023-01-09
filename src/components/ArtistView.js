// ArtistView and AlbumView components will be making separate API calls from the app
// This is the compone to serve specific data about our artist 

//first we import hooks from react

import {useState, useEffect} from 'react'

function ArtistView(){
    const [artistData, setArtistData] = useState([])

    return(
        <div>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView