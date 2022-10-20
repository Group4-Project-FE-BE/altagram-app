import React from "react";

function CustomButton({ id, label, loading, onClick }) {
  return (
    <button id={id} className={`button-sign submit text-black fw-bold w-100 ${loading && "bg-primary"}`} onClick={onClick} disabled={loading}>
      {label}
    </button>
  );
}

export default CustomButton;
