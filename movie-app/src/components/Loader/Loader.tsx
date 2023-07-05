import React, { FC } from "react";
import "./Loader.scss"

const Loader: FC = () => {
  return (
    <div className="d-flex justify-content-center loader">
      <div className="spinner-border" role="status"></div>
    </div>
  );
}

export default Loader;