import { useEffect, useState } from "react";
import { getWorkspaces, getPrograms, getMembers } from "../api/api";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [workspaces, setWorkspaces] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getWorkspaces().then(setWorkspaces);
    getPrograms().then(setPrograms);
    getMembers().then(setMembers);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <h2>Enterprise Overview</h2>
          <p className="muted">
            Workspace, Program & Member activity overview
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <h4>Workspaces</h4>
            <span>{workspaces.length}</span>
          </div>

          <div className="kpi-card">
            <h4>Programs</h4>
            <span>{programs.length}</span>
          </div>

          <div className="kpi-card">
            <h4>Members</h4>
            <span>{members.length}</span>
          </div>

          <div className="kpi-card highlight">
            <h4>Active Programs</h4>
            <span>
              {programs.filter(p => p.status === "In Progress").length}
            </span>
          </div>
        </div>

        {/* RECENT PROGRAMS */}
        <div className="table-card">
          <h3 className="section-title">Recent Programs</h3>

          <table className="enterprise-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Program Name</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {programs.slice(0, 5).map(p => (
                <tr key={p.id}>
                  <td className="muted">{p.id}</td>
                  <td className="bold">{p.name}</td>
                  <td>{p.owner}</td>
                  <td>
                    <span className={`status ${p.status.toLowerCase().replace(" ", "-")}`}>
                      {p.status}
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
