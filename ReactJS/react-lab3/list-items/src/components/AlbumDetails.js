import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AlbumDetails = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((result) => {
        setAlbum(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div key={album.id} className="container-fluid h-100 alert alert-info">
      <p>Id: {album?.id}</p>
      <p>UserId: {album?.userId}</p>
      <p>Title: {album?.title}</p>
    </div>
  );
};

export default AlbumDetails;
