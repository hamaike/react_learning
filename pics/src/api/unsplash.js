import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c567b6d93bb8473ce104859c2a52a00d95f714ede5475cf070450621da945f0a'
    }

});


