import React, { useEffect, useState } from "react";
import {getImagesArray} from '../../utils/utils';
import Pagination from '../Pagination/Pagination';
import './PhotoGallery.scss';

const PhotoGallery = (props) => {
    const { location } = props;
    const [loading,setLoading] = useState(false);
    const [errorDisplay, setErrorDisplay] = useState(false);
    const [imagesArray, setImagesArray] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(()=>{
        fetchImageArray(location,pageNumber);
    },[])

    useEffect(()=>{
        fetchImageArray(location,pageNumber);
    },[pageNumber])

    const fetchImageArray = (location,page) => {
        const { lat, lng } = location;
        setLoading(true);
        getImagesArray(lat,lng,page).then(response => {
            const data = response.data.photos;
            setImagesArray(data.photo);
            setPageNumber(data.page);
            setTotalPages(data.pages > 10 ? 10 : data.pages);
            setLoading(false);    
        }).catch( () => {
            setErrorDisplay(true);
        });
    }

    return(
        <div className="photo-gallery-wrapper">
            {
                loading ? (
                    <div>Loading Images</div>
                ) : (
                    errorDisplay ? (
                        <div>Error while fetching data</div>
                    ) : (
                        imagesArray ? (
                            <div className="gallery-container">
                                <div className="photo-gallery">
                                    {imagesArray && imagesArray.map(image => {
                                        const { farm, id, secret, server } = image;
                                        return <div className="photo">
                                                <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`image-${id}`}></img>
                                            </div>
                                    })}
                                </div>
                                <Pagination 
                                    pageNumber={pageNumber} 
                                    totalPages={totalPages} 
                                    setPageNumber={setPageNumber}
                                />
                            </div>
                        ) : null
                    )
                )
            }
        </div>
    )
}

export default PhotoGallery