import React from "react";

const AdminFooter = () => {
  return (
    <div className="d-flex bg-black justify-content-between px-5 pt-2">
      <p>
        <span>CMart</span>
      </p>
      <p className="opacity-75">
        Copyright &copy; 2025 By{" "}
        <span className="fw-bold">
          <a href="https://adszoo.in" target="_blank">
            Adszoo
          </a>
        </span>
      </p>
    </div>
  );
};

export default AdminFooter;
