import React from "react";
import "./Loader.scss"

function Loader() {
  return (
    <div className="d-flex justify-content-center loader">
      <div className="spinner-border" role="status"></div>
    </div>
  );
}

export default Loader;