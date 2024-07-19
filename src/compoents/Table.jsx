/* eslint-disable react/prop-types */
import "./Table.css";
const Table1 = ({ id, name1, email, role }) => {
  return (
    <>
      <div className="table-head-comp">
        <p className="id">{id}</p>
        <p className="name">{name1}</p>
        <p className="email">{email}</p>
        <p className="role">{role}</p>
      </div>
      <hr
        style={{
          margin: "0",
          border: "0.5px solid #d6d1d1",
        }}
      />
    </>
  );
};
export default Table1;
