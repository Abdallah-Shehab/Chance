import React from "react";
//----===============-----------------------------------
const CardHoverButton = (p) => {
  return (
    <div>
      <a
        href={"btn"}
        type="button"
        onClick={p.clicked}
        className="btn btn-light w-75 m-3 text-left"
        style={{ color: "#000" }}
      >
        <i className={"fas fa-" + p.icon + " pr-2"} />
        {p.txt}
      </a>
    </div>
  );
};
export default CardHoverButton;
