import { useEffect, useState } from "react";
import { getMembers } from "../api/api";
import "../styles/members.css";

export default function Members() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMembers().then(res => setData(res || []));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-container">

        {/* Header */}
        <div className="page-header">
          <h2>
            Members <span>({data.length})</span>
          </h2>
        </div>

        {/* Table Card */}
        <div className="table-card">
          <table className="enterprise-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Workspace</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.map(m => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td className="bold">{m.fullName}</td>
                  <td className="muted">{m.email}</td>
                  <td>
                    <span className={`role ${(m.role || "").toLowerCase()}`}>
                      {m.role || "-"}
                    </span>
                  </td>
                  <td>{m.workspaceId}</td>
                  <td>
                    <span className={`status ${(m.status || "").toLowerCase()}`}>
                      {m.status || "-"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
