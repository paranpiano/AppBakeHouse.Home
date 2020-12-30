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
    <ImageContents imageSrc={imagePath}>
      {/* <div>
        <p onClick={getClient}>getClients</p>
        <p onClick={deleteClient}>deleteClients</p>
        <ul>
          {client.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div> */}
      <div className="post">
        <h2>Clients</h2>
        <h4>Easy to use technologies for clients.</h4>
      </div>
    </ImageContents>
  );
};

export default Client;
