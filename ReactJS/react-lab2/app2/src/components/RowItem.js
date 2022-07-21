import React from 'react';

const RowItem = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.password}</td>
    </tr>
  );
};

export default RowItem;
