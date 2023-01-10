// AlbumView and ArtistView are components that will be making separate API calls fromm the app
// This component will serve specific data about a given album

// Again, we need to first import hooks from react

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView(){
    const {id} = useParams()
    const [albumData, setAlbumData] = useState([])

    return(
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView