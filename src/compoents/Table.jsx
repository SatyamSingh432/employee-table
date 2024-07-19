import "./Table.css";

const Table1 = ({ id, name1, email, role }) => {
  return (
    <tr className="table-head-comp">
      <td className="id">{id}</td>
      <td className="name">{name1}</td>
      <td className="email">{email}</td>
      <td className="role">{role}</td>
    </tr>
  );
};

export default Table1;
