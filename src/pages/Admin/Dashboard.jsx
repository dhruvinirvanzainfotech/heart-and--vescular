import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/appointment")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Appointments</h3>
          <h1>{appointments.length}</h1>
        </div>
      </div>
    </div>
  );
}