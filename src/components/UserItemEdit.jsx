import React from "react";

export default function UserItemEdit({ rowIndex,data, onSave, onDelete }) {
  const collectValues = (e, rowKey) => {
    const user = { address: {} };

    user.id = rowKey;
    user.avatar = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtAvatar]`
    ).value;
    user.name = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtName]`
    ).value;
    user.company = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtCompany]`
    ).value;
    user.phone = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtPhone]`
    ).value;
    user.email = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtEmail]`
    ).value;
    user.website = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtWebsite]`
    ).value;
    user.address.country = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtCountry]`
    ).value;
    user.address.city = document.querySelector(
      `tr[rowid=row-${rowKey}] input[name=txtCity]`
    ).value;

    onSave(e, user);
  };
  return (
    <tr key={data.id} rowid={`row-${data.id}`} >
      <th scope="row">{rowIndex}</th>
      <td>
        <input
          name="txtAvatar"
          type="url"
          className="form-control"
          placeholder="Enter Avatar Url"
          defaultValue={data.avatar}
        />
      </td>
      <td>
        <input
          name="txtName"
          type="text"
          className="form-control"
          placeholder="Enter Full Name"
          defaultValue={data.name}
        />
      </td>
      <td>
        <input
          name="txtCompany"
          type="text"
          className="form-control"
          placeholder="Enter Company Name"
          defaultValue={data.company}
        />
      </td>
      <td style={{ direction: "ltr" }}>
        <input
          name="txtPhone"
          type="text"
          className="form-control"
          placeholder="Enter Phone Name"
          defaultValue={data.phone}
        />
      </td>
      <td>
        <input
          name="txtEmail"
          type="mail"
          className="form-control"
          placeholder="Enter email"
          defaultValue={data.email}
        />
      </td>
      <td>
        <input
          name="txtWebsite"
          type="url"
          className="form-control"
          placeholder="Enter website"
          defaultValue={data.website}
        />
      </td>
      <td>
        <input
          name="txtCountry"
          type="text"
          className="form-control"
          placeholder="Enter Country"
          defaultValue={data.address.country}
        />
      </td>
      <td>
        <input
          name="txtCity"
          type="text"
          className="form-control"
          placeholder="Enter City"
          defaultValue={data.address.city}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-success mx-1"
          title="ذخیره"          
          onClick={e => collectValues(e, data.id)}
        >
          ✓
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          title="حذف"
          onClick={e => onDelete(e, data.id)}
        >
          ✗
        </button>
      </td>
    </tr>
  );
}
