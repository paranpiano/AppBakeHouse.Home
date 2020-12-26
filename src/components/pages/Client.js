import { useState } from 'react';
import axios from 'axios';

import ImageContents from '../templates/ImageContents';

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
    <ImageContents imageSrc="https://appbakehouse.com/images/portfolio.jpg" imageText="Client">
      <div>
        <p onClick={getClient}>getClients</p>
        <p onClick={deleteClient}>deleteClients</p>
        <ul>
          {client.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    </ImageContents>
  );
};

export default Client;
