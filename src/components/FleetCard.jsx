import React from "react";

const FleetCard = React.memo(({ fleet, updateDriver, toggleAvailability, deleteFleet }) => {
  return (
    <div className="card">
      <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"
       alt="vehicle"
       className = "fleet-image" />
      <p><b>Reg:</b> {fleet.regNo}</p>
      <p><b>Driver:</b> {fleet.driver}</p>
      <p><b>Status:</b> {fleet.available ? "Available" : "Unavailable"}</p>

      <button onClick={() => {
        const name = prompt("Enter new driver name");
        if (name) updateDriver(fleet.id, name);
      }}>
        Update Driver
      </button>

      <button onClick={() => toggleAvailability(fleet.id)}>Toggle Status</button>
      <button onClick={() => deleteFleet(fleet.id)}>Delete</button>
    </div>
  );
});

export default FleetCard;
