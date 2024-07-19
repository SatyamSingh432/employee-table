/* eslint-disable react/prop-types */
import "./Table.css";
const Table1 = ({ id, name1, email, role }) => {
  return (
    <tr className="table-head-comp">
      <tr className="id">{id}</tr>
      <tr className="name">{name1}</tr>
      <tr className="email">{email}</tr>
      <tr className="role">{role}</tr>
    </tr>
  );
};
export default Table1;
