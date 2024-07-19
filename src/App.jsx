/* eslint-disable react/jsx-key */
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
      <div className="table-container">
        <div className="table-head">
          <h3 className="id">ID</h3>
          <h3 className="name">Name</h3>
          <h3 className="email">Email</h3>
          <h3 className="role">Role</h3>
        </div>
        <div className="data-render">
          {filteredUsers.map((ele) => (
            <Table1
              key={ele.id}
              id={ele.id}
              name1={ele.name}
              email={ele.email}
              role={ele.role}
            />
          ))}
        </div>
      </div>
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
          Prev
        </button>
        <p>{page}</p>
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
