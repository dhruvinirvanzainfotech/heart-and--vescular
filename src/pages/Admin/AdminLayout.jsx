import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin-layout">

      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>CRM Admin</h2>
          <p>Dr. Ankur Shah</p>
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