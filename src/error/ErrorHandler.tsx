import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="alert alert-warning" role="alert">
      <h4 className="alert-heading">Sorry!</h4>
      <p>The route you are looking for is not available.</p>
      <hr />
      <p className="mb-0">
        Click here to go <Link to="/">home</Link>
      </p>
    </div>
  );
};
