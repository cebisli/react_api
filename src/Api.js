import axios from 'axios';

const searchImages  = async (txt) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      headers : {
        Authorization : 'Client-ID i4BE1B1crPHVGc_iKYEZJWaN-1Er_ZHFJp4vKZcGAcI'
      },
      params : {
        query : txt
      }
    });
    return res.data.results;
  }

export default searchImages;  