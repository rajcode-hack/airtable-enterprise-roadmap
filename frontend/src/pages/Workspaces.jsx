import { useEffect, useState } from "react";
import { getWorkspaces } from "../api/api";
import "../styles/workspaces.css";

export default function Workspaces() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWorkspaces().then(setData);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-container">

        <div className="page-header">
          <h2>
            Enterprise Workspaces <span>({data.length})</span>
          </h2>
        </div>

        <div className="table-card">
          <table className="enterprise-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Workspace Name</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Owner</th>
              </tr>
            </thead>

            <tbody>
              {data.map(w => (
                <tr key={w.id}>
                  <td>{w.id}</td>
                  <td className="bold">{w.name}</td>
                  <td>
                    <span className={`badge plan-${w.plan.toLowerCase()}`}>
                      {w.plan}
                    </span>
                  </td>
                  <td>
                    <span className={`status ${w.status.toLowerCase()}`}>
                      {w.status}
                    </span>
                  </td>
                  <td>{w.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
