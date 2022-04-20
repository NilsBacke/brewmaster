import React from "react";

export default function Button({ onClick, title, className }) {
  return (
    <button
      type="button"
      className={"btn btn-primary w-100 " + className}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
