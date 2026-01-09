import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <aside className="sidenav">
      <div className="sidenav-logo">Enterprise</div>

      <nav className="sidenav-menu">
        <NavLink to="/" end className="nav-item">
          Dashboard
        </NavLink>

        <NavLink to="/workspaces" className="nav-item">
          Workspaces
        </NavLink>

        <NavLink to="/programs" className="nav-item">
          Programs
        </NavLink>

        <NavLink to="/members" className="nav-item">
          Members
        </NavLink>
      </nav>
    </aside>
  );
}
