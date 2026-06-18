import { NavLink, Outlet } from "react-router-dom";
import logo from "../../image/logo3.png";
import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">

      <aside className="sidebar">
        <div className="sidebar-header">
  <img src={logo} alt="Company Logo" className="admin-logo" />
</div>
        <nav>
          <NavLink to="/admin" end>
            Dashboard
          </NavLink>

          <NavLink to="/admin/appointments">
            Appointments
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
}