import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "200px" }}>
      <Link to="/avia">Купить билеты</Link>
    </h1>
  );
};
