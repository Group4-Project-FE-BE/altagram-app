import React from "react";

function CustomButton({ id, label, loading, onClick }) {
  const btnCustom = {
    backgroundColor: "#fdc8c0",
  };

  return (
    <button id={id} style={btnCustom} className={`p-3 rounded text-black fw-bold w-100 ${loading && "bg-succes"}`} onClick={onClick} disabled={loading}>
      {label}
    </button>
  );
}

export default CustomButton;
