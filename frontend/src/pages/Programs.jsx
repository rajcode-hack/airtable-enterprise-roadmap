import { useEffect, useState } from "react";
import { getPrograms } from "../api/api";
import "../styles/programs.css";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms().then(setPrograms);
  }, []);

  return (
    <div className="programs-container">
      <h2 className="page-title">
        Enterprise Programs <span>({programs.length})</span>
      </h2>

      <div className="table-wrapper">
        <table className="enterprise-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Program Name</th>
              <th>Workspace</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {programs.map((p) => (
              <tr key={p.id}>
                <td className="mono">{p.id}</td>
                <td>{p.name}</td>
                <td>{p.workspaceId}</td>
                <td>{p.owner}</td>
                <td>
                  <span className={`status ${p.status.replace(" ", "").toLowerCase()}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
