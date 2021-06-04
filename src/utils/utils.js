import axios from 'axios';

export const getImagesArray =async (lat,lng,page) => {
    return axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7690a836aad8cc2f81a2ba4603c40436&lat=${lat}&lon=${lng}&radius=5&per_page=20&page=${page}&format=json&nojsoncallback=1`).then((response)=>{
        return response;
    }).catch(err =>{
        console.log(err);
    })
}