import { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Edit, Trash2 } from "lucide-react";
import "./Appointments.css";

export default function Appointments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    mode: "view",
    item: null,
  });

  const [form, setForm] = useState({});

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  const load = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/appointment");
      setData(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Open Modal
  const openModal = (item, mode) => {
    if (item) {
      setForm({
        ...item,
        appointment_date: formatDate(item.appointment_date),
      });
    } else {
      setForm({});
    }

    setModal({
      open: true,
      mode,
      item: item || null,
    });
  };

  const closeModal = () => {
    setModal({ open: false, mode: "view", item: null });
    setForm({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.id) return alert("Missing ID");

    try {
      await axios.put(`http://localhost:5000/appointment/${form.id}`, form);
      alert("Updated successfully!");
      closeModal();
      load();
    } catch (err) {
      console.error(err);
      alert("Failed to update");
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;
    try {
      await axios.delete(`http://localhost:5000/appointment/${id}`);
      load();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="appointments">
      <h2>Appointments</h2>

      {loading && <p>Loading...</p>}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
            <th>Treatment</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{formatDate(item.appointment_date)}</td>
              <td>{item.treatment}</td>
              <td>{item.message?.slice(0, 40)}...</td>
              <td className="actions">
                <Eye onClick={() => openModal(item, "view")} title="View" />
                <Edit onClick={() => openModal(item, "edit")} title="Edit" />
                <Trash2 onClick={() => remove(item.id)} title="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ==================== MODAL ==================== */}
      {modal.open && (
        <div 
          className="modal" 
          onClick={closeModal}           // Click on backdrop = close
        >
          <div 
            className="modal-box" 
            onClick={(e) => e.stopPropagation()}   // Prevent closing when clicking inside
          >
            <h3>
              {modal.mode === "edit" ? "Edit Appointment" : "View Appointment"}
            </h3>

            <form onSubmit={save}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    value={form.name || ""}
                    onChange={handleChange}
                    disabled={modal.mode === "view"}
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    value={form.phone || ""}
                    onChange={handleChange}
                    disabled={modal.mode === "view"}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email || ""}
                    onChange={handleChange}
                    disabled={modal.mode === "view"}
                  />
                </div>

                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="appointment_date"
                    value={form.appointment_date || ""}
                    onChange={handleChange}
                    disabled={modal.mode === "view"}
                  />
                </div>

                <div className="form-group">
                  <label>Treatment</label>
                  {modal.mode === "edit" ? (
                    <select
                      name="treatment"
                      value={form.treatment || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Cardiac Testing & Treatment">Cardiac Testing & Treatment</option>
                      <option value="Vascular Testing and Treatment">Vascular Testing and Treatment</option>
                      <option value="Varicose Veins Treatment">Varicose Veins Treatment</option>
                      <option value="Nutrition Counseling">Nutrition Counseling</option>
                    </select>
                  ) : (
                    <input value={form.treatment || ""} disabled />
                  )}
                </div>

                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message || ""}
                    onChange={handleChange}
                    disabled={modal.mode === "view"}
                  />
                </div>
              </div>

              <div className="modal-actions">
                {modal.mode === "edit" && (
                  <button type="submit" className="btn-save">
                    Save Changes
                  </button>
                )}
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}