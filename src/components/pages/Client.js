import { useState } from 'react';
import axios from 'axios';

import ImageContents from '../templates/ImageContents';
import imagePath from '../../images/clients.png';

const Client = () => {
  const [client, setClient] = useState([]);

  const myApiFunction = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    return result;
  };

  const getClient = async () => {
    try {
      const result = await myApiFunction();
      setClient(result.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteClient = () => {
    setClient([]);
  };

  return (
    <ImageContents imageSrc={imagePath} imageText="Clients">
      <div className="post">
        <h2>Clients</h2>
        <h3>- Frontend</h3>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.crossbim.mobileviewer">
            CROSSTEAM - CONSTRUCTION COORDINATION APP
          </a>
        </h4>
        <h3>- Backend</h3>
        <h4>
          <a href="https://play.google.com/store/apps/details?id=com.peapea.reviewnote.release">
            REVIEWNOTE - IMPROVEMENT OF LEARNING PERFORMANCE APP
          </a>
        </h4>
      </div>
    </ImageContents>
  );
};

export default Client;
