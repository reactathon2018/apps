import React from "react";

const DropDown = ({ style, logOut }) => {
  return (
    <div className="dropdown" style={style}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Settings
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Profile
        </a>
        <a className="dropdown-item" href="#" onClick={() => logOut()}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default DropDown;
