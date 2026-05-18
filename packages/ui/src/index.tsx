import React from "react";

export const Button = (props: any) => (
  <button
    {...props}
    style={{
      padding: "0.6rem 1.2rem",
      background: "#ff3b3b",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: 600
    }}
  />
);
