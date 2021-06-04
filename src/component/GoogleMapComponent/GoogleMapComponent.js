import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { useState } from 'react';
import PhotoModal from '../PhotoModal/PhotoModal';
import './GoogleMapComponent.scss';

const MainMap = (props) => {
    const { google } = props
    const [marker, setMarker] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onMapClick = (t, map, coord) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
    
        setMarker([
            {
              position: { lat, lng }
            }
        ])
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    return (
        <div>
            <h1 className="heading">LBB ASSIGNMENT ON GOOGLE MAPS</h1>
            <Map
                google={google}
                className={"map-container"}
                zoom={11}
                initialCenter={{lat: 28.644800,lng: 77.216721}}
                onClick={onMapClick}
            >
                {marker.map((marker, index) => (
                    <Marker
                        key={index}
                        title={marker.title}
                        name={marker.name}
                        position={marker.position}
                    >
                    </Marker>
                ))}
            </Map>
            <PhotoModal modalIsOpen={modalIsOpen} position={marker[0] ? marker[0].position : {}} closeModal={closeModal}/>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
  })(MainMap);