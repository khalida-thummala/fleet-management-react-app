import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";
import "../styles/dashboard.css";

const AdminDashboard = () => {
  const [fleets, setFleets] = useState([]);

  const addFleet = (fleet) => {
    setFleets((prev) => [...prev, fleet]);
  };

  const updateDriver = useCallback((id, name) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <Sidebar addFleet={addFleet} />
        <div className="cards">
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              updateDriver={updateDriver}
              toggleAvailability={toggleAvailability}
              deleteFleet={deleteFleet}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
