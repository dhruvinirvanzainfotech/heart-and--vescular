import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { CheckCircle, XCircle, Clock, Calendar, RefreshCw } from "lucide-react";
import "./AppointmentDashboard.css";


const API_URL = "http://localhost:5000/api/appointment";

export default function AppointmentDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    pending: 0,
    today: 0,
    accepted: 0,
    rejected: 0,
  });

  const loadAppointments = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      const data = res.data || [];
      setAppointments(data);

      const now = new Date();
      const todayStr = now.toISOString().split("T")[0];

      let pending = 0,
        today = 0,
        accepted = 0,
        rejected = 0;

      data.forEach((app) => {
        const status = (app.status || "pending").toLowerCase();
        const appDate = app.appointment_date?.split("T")[0];

        if (status === "accepted") accepted++;
        else if (status === "rejected") rejected++;
        else pending++;

        if (appDate === todayStr) today++;
      });

      setStats({ pending, today, accepted, rejected });
    } catch (err) {
      console.error("Error loading appointments:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh every 8 seconds
  useEffect(() => {
    loadAppointments();
    const interval = setInterval(loadAppointments, 8000);
    return () => clearInterval(interval);
  }, [loadAppointments]);

const updateStatus = async (id, newStatus) => {
  const appointment = appointments.find((a) => a.id === id);

  try {
    await axios.put(`${API_URL}/${id}`, {
      ...appointment,
      status: newStatus,
    });

    loadAppointments();
  } catch (err) {
    console.error(err);
  }
};

  const formatDateTime = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Appointment Dashboard</h1>
          <p>Manage all appointment requests</p>
        </div>
        <button onClick={loadAppointments} className="refresh-btn">
          <RefreshCw size={20} /> Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card pending">
          <Clock size={32} />
          <h3>{stats.pending}</h3>
          <p>Pending</p>
        </div>

        <div className="stat-card today">
          <Calendar size={32} />
          <h3>{stats.today}</h3>
          <p>Today</p>
        </div>

        <div className="stat-card accepted">
          <CheckCircle size={32} />
          <h3>{stats.accepted}</h3>
          <p>Accepted</p>
        </div>

        <div className="stat-card rejected">
          <XCircle size={32} />
          <h3>{stats.rejected}</h3>
          <p>Rejected</p>
        </div>
      </div>

      {/* Appointments List */}
      <div className="pending-section">
        <div className="section-header">
          <h2>Appointment Requests</h2>
          <span className="pending-count">{stats.pending} Pending</span>
        </div>

        {loading ? (
          <p className="loading-text">Loading appointments...</p>
        ) : appointments.length === 0 ? (
          <div className="empty-state">
            <p>No appointments found.</p>
          </div>
        ) : (
          <div className="appointments-grid">
            {appointments.map((app) => (
              <div key={app.id} className="appointment-card">
                <div className="card-header">
                  <h4>{app.name}</h4>
                  <span
                    className={`status-badge ${
                      app.status?.toLowerCase() || "pending"
                    }`}
                  >
                    {app.status || "Pending"}
                  </span>
                </div>

                <div className="card-body">
                  <p>
                    <strong>Phone:</strong> {app.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {app.email}
                  </p>
                  <p>
                    <strong>Date:</strong> {formatDateTime(app.appointment_date)}
                  </p>
                  <p>
                    <strong>Treatment:</strong> {app.treatment || "Not selected"}
                  </p>
                  {app.message && (
                    <p>
                      <strong>Message:</strong> {app.message}
                    </p>
                  )}
                </div>

                {(app.status?.toLowerCase() === "pending" || !app.status) && (
                  <div className="card-actions">
                    <button
                      className="btn-accept"
                      onClick={() => updateStatus(app.id, "Accepted")}
                    >
                      <CheckCircle size={18} /> Accept
                    </button>
                    <button
                      className="btn-reject"
                      onClick={() => updateStatus(app.id, "Rejected")}
                    >
                      <XCircle size={18} /> Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}