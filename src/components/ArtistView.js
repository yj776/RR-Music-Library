// ArtistView and AlbumView components will be making separate API calls from the app
// This is the compone to serve specific data about our artist 

//first we import hooks from react

import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

console.log('5')

function ArtistView(){
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        console.log('API_URL: ', API_URL)
        const fetchData = async () => {
            console.log('fetchData')
            const response = await fetch(API_URL)
            console.log('response: ', response)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    },[id])


    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    const renderAlbums = justAlbums.map((album,i) => {
        return(
            <div>
                <Link to = {`/album/${album.collectionId}`}>
                <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })


    return(
        <div>
            <h2> The id passed was: {id} </h2>
            <p>Artist Data Goes Here!</p>
            {renderAlbums}
        </div>
    )
}

export default ArtistView



    