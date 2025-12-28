import { useState } from "react";

const Sidebar = ({ addFleet }) => {
  const [form, setForm] = useState({
    regNo: "",
    category: "Car",
    driver: "",
    available: true,
  });

  const handleSubmit = () => {
    if (!form.regNo || !form.driver) {
      alert("All fields required");
      return;
    }

    addFleet({ ...form, id: Date.now() });
    setForm({ regNo: "", category: "Car", driver: "", available: true });
  };

  return (
    <div className="sidebar">
      <h3>Add Fleet</h3>
      <input placeholder="Vehicle Reg No" value={form.regNo} onChange={(e) => setForm({ ...form, regNo: e.target.value })} />
      <input placeholder="Driver Name" value={form.driver} onChange={(e) => setForm({ ...form, driver: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>
      <button onClick={handleSubmit}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;
