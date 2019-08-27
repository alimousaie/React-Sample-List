import React from "react";

export default function UserItemSimple({ rowIndex,data ,onEdit,onDelete }) {
  return (
    <tr key={data.id} rowid={`row-${data.id}`}>
      <th scope="row">{rowIndex}</th>
      <td>
        <img src={data.avatar} className="avatar" alt={data.username} />
      </td>
      <td>{data.name}</td>
      <td>{data.company}</td>
      <td style={{ direction: "ltr" }}>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.website}</td>
      <td>{data.address.country}</td>
      <td>{data.address.city}</td>
      <td>
        <button type="button" 
        className="btn btn-warning mx-1"
         title="ویرایش"
         style={{width:'40px'}}
         onClick={(e)=> onEdit(e)}>
          ✎
        </button>
        <button type="button" 
        className="btn btn-danger mx-1" 
        title="حذف"
        onClick={(e)=> onDelete(e,data.id)}>
          ✗
        </button>
      </td>
    </tr>
  );
}
