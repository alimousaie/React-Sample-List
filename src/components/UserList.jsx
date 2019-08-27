import React from "react";
import UserItem from "./UserItem";
const UserList = props => {
  const items = props.users.map((user,rowIndex) => (
    <UserItem key={user.id} rowIndex={rowIndex} data={user} onChange={props.onChange} />
  ));
  return (
    <div className="bg-light">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">website</th>
            <th scope="col">country</th>
            <th scope="col">city</th>
            <th scope="col" style={{ width: "130px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default UserList;
