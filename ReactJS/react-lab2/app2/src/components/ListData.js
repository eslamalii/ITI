import React from 'react';
import { Table } from 'react-bootstrap';
import RowItem from './RowItem';

const ListData = (props) => {
  return (
    <Table striped bordered hover className="w-50 mx-auto">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <RowItem
            key={item.id}
            username={item.username}
            email={item.email}
            password={item.password}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ListData;
