import React, { useState } from "react";

const Task = ({ name, desc }) => {
  const [showDesc, setshowDesc] = useState(false);
  const [checked, setchecked] = useState(false);
  const onShowDescriptionHandler = () => {
    setshowDesc(!showDesc);
  };
  const OnCheckboxChangeHandler = (event) => {
    setchecked(event.target.checked);
  };
  return (
    <div className="w-full h border border-gray-400 rounded-r-xl  bg-gray-100">
      <div className="h-14 flex w-full">
        <div className="w-12  p-1.5">
          <input
            onChange={OnCheckboxChangeHandler}
            type="checkbox"
            className="w-full h-full "
          />
        </div>
        <div
          onClick={onShowDescriptionHandler}
          className={`h-full  w-full flex justify-start p-2 text-xl font-bold items-center ${
            checked ? "line-through" : ""
          } `}
        >
          {name}
        </div>
      </div>
      <div
        onClick={onShowDescriptionHandler}
        className={`${showDesc ? "" : "hidden"}`}
      >
        <div className="p-2 text-wrap justify text-sm">{desc}</div>
      </div>
    </div>
  );
};

export default Task;
