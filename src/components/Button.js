import React from "react";

export default function Button({ onClick, title, className, ...props }) {
  return (
    <button
      type="button"
      className={"btn btn-primary w-100 " + className}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
}
