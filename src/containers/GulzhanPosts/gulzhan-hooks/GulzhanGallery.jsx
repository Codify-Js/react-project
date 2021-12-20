import React, {useState, useEffect} from "react";
import axios from 'axios'
import PhotosList from "./PhotosList";

const API_URL = 'https://jsonplaceholder.typicode.com';

const GulzhanGallery = () => {
    const [photos, setPhotos] = useState([]) 

    useEffect(() => {
      axios.get(`${API_URL}/photos`)
        .then((response) => {
          setPhotos(response.data)
        })
  
    }, [])

    return (
        <div className='gulzhan-gallery-container'>
            <div className="post-container_body">
           <PhotosList list={photos}/>
        </div>
        </div>
    )
}

export default GulzhanGallery