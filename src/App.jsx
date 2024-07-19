import "./App.css";
import { useEffect, useState } from "react";
import Table1 from "./compoents/Table";

function App() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const lastIndex = page * 10;
  const firstIndex = lastIndex - 10;
  const totalPages = Math.ceil(userData.length / 10);
  const filteredUsers = userData.slice(firstIndex, lastIndex);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        if (!apiData.ok) {
          throw new Error();
        }
        const result = await apiData.json();
        setUserData(result);
      } catch (error) {
        alert("failed to fetch data");
      }
    }
    fetchData();
  }, []);

  const preHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const nxtHandler = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="data-table">
      <h2>Employee Data Table</h2>
      <table className="table-container">
        <thead>
          <tr className="table-head">
            <th className="id">ID</th>
            <th className="name">Name</th>
            <th className="email">Email</th>
            <th className="role">Role</th>
          </tr>
        </thead>
        <tbody className="data-render">
          {filteredUsers.map((ele) => (
            <Table1
              key={ele.id}
              id={ele.id}
              name1={ele.name}
              email={ele.email}
              role={ele.role}
            />
          ))}
        </tbody>
      </table>
      <div className="btn-comp">
        <button
          style={{
            height: "30px",
            width: "60px",
            backgroundColor: "#0c964ac2",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={preHandler}
        >
          Previous
        </button>
        <p
          style={{
            height: "30px",
            width: "30px",
            backgroundColor: "#0c964ac2",
            borderRadius: "5px",
            alignContent: "center",
            paddingLeft: "17px",
          }}
        >
          {page}
        </p>
        <button
          style={{
            height: "30px",
            width: "60px",
            backgroundColor: "#0c964ac2",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={nxtHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
