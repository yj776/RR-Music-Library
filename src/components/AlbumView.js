// AlbumView and ArtistView are components that will be making separate API calls fromm the app
// This component will serve specific data about a given album

// Again, we need to first import hooks from react

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView(){
    const {id} = useParams()
    const [albumData, setAlbumData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async() => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log('resData', resData)
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')
    const renderSong = justSongs.map((song,i) => {
        return(
            <div>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return(
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
            {renderSong}
        </div>
    )
}

export default AlbumView