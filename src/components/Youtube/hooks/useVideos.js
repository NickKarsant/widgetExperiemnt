import { useState } from 'react';
import youtube from '../api/youtube';

const useVideos = () => {
  const [videos, setVideos] = useState([]); 

  const search = async videoTerm => {
    const response = await youtube.get("/search", {
      params: {
        q: videoTerm
      }
    });

    setVideos(response.data.items);
  };
  return [ videos, search];
};

export default useVideos;