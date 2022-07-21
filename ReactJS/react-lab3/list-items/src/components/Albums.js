import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Table } from 'react-bootstrap';

const Albums = () => {
  const [albums, setAlbum] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let goToDetails = (id) => {
    navigate(`/albums/${id}`);
  };

  const onSearchChanged = (event) => {
    let value = event.target.value;
    setSearchValue({ ...searchValue, value });
    const filterList = albums.filter((album) =>
      album.title.includes(event.target.value)
    );
    setSearch({ ...search, filterList });
  };

  return (
    <div>
      <div className="form-outline w-50 mx-auto my-3">
        <input
          onChange={onSearchChanged}
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {searchValue
            ? search.filterList.map((album) => {
                return (
                  <tr key={album.id}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                    <td>
                      <button
                        onClick={() => goToDetails(album.id)}
                        className="btn btn-secondary"
                      >
                        Show Details
                      </button>
                    </td>
                  </tr>
                );
              })
            : albums.map((album) => {
                return (
                  <tr key={album.id}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                    <td>
                      <button
                        onClick={() => goToDetails(album.id)}
                        className="btn btn-secondary"
                      >
                        Show Details
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default Albums;
