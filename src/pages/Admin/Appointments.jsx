import { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Edit, Trash2 } from "lucide-react";
import "./admin.css";

export default function Appointments() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({ open: false, mode: "view", item: null });
  const [form, setForm] = useState({});

 const load = async () => {
  try {
    const res = await axios.get("http://localhost:5000/appointment");
    console.log("API RESPONSE:", res.data);
    setData(res.data);
  } catch (err) {
    console.log("API ERROR:", err);
  }
};

  useEffect(() => {
    load();
  }, []);

  const openModal = (item, mode) => {
    setModal({ open: true, mode, item });
    setForm(item || {});
  };

  const closeModal = () => {
    setModal({ open: false, mode: "view", item: null });
    setForm({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:5000/appointment/${form.id}`,
      form
    );

    load();
    closeModal();
  };

  const remove = async (id) => {
    if (!window.confirm("Delete?")) return;

    await axios.delete(`http://localhost:5000/appointment/${id}`);
    load();
  };

  return (
    <div className="appointments">
      <h2>Appointments</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Email</th>
            <th>Date</th><th>Treatment</th><th>Message</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.appointment_date}</td>
              <td>{item.treatment}</td>
              <td>{item.message?.slice(0, 40)}</td>

              <td className="actions">
                <Eye onClick={() => openModal(item, "view")} />
                <Edit onClick={() => openModal(item, "edit")} />
                <Trash2 onClick={() => remove(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal.open && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <h3>{modal.mode === "edit" ? "Edit" : "View"}</h3>

            <form onSubmit={save}>

  <div className="form-grid">

    <div className="form-group">
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={form.name || ""}
        onChange={handleChange}
        disabled={modal.mode === "view"}
      />
    </div>

    <div className="form-group">
      <label>Phone Number</label>
      <input
        type="text"
        name="phone"
        value={form.phone || ""}
        onChange={handleChange}
        disabled={modal.mode === "view"}
      />
    </div>

    <div className="form-group">
      <label>Email Address</label>
      <input
        type="email"
        name="email"
        value={form.email || ""}
        onChange={handleChange}
        disabled={modal.mode === "view"}
      />
    </div>

    <div className="form-group">
      <label>Appointment Date</label>
      <input
        type="date"
        name="appointment_date"
        value={form.appointment_date?.split("T")[0] || ""}
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
          <option value="">Select Treatment</option>
          <option value="Cardiac Testing & Treatment">
            Cardiac Testing & Treatment
          </option>
          <option value="Vascular Testing and Treatment">
            Vascular Testing and Treatment
          </option>
          <option value="Varicose Veins, Ulcer and Lymphedema Treatment Center">
            Varicose Veins, Ulcer and Lymphedema Treatment Center
          </option>
          <option value="Nutrition Counseling">
            Nutrition Counseling
          </option>
        </select>
      ) : (
        <input
          value={form.treatment || ""}
          disabled
        />
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

    {modal.mode !== "view" && (
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