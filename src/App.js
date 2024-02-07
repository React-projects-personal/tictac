import { useEffect, useState } from "react";
import "./App.css";
import Task from "./componants/Task";

function App() {
  const [AddTask, setAddTask] = useState(false)

  const OnAddTaskFormShowHandler =()=>{
    setAddTask(!AddTask)
  }
  return (
    <div>
      <div className=" bg-gray-400 rounded-b-2xl h-12 flex justify-center items-center text-2xl font-serif ">
        Tictac
      </div>

      <div className={` ${AddTask ? "" : "hidden"} m-2`}>
        <div className="bg-white p-8 rounded ">
          <h2 className="text-2xl font-semibold mb-4">Add Task</h2>

          <div className="mb-4">
            <label for="title" className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-4">
            <label
              for="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <textarea
              id="description"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter task description"
            ></textarea>
          </div>

          <button
            
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center my-4"> Your Tasks </div>
      <div className="flex flex-col space-y-2 mx-2 border-l border-black">
        <Task
          name="Python Assgnement"
          desc="lavala lasun"
        />
        <Task name="java Assgnement" />
        <Task name="CPP Assgnement" />
        <Task name="DSA Assgnement" />
        <Task name="Javascript Assgnement" />
      </div>

      <div onClick={OnAddTaskFormShowHandler} className="fixed right-0 bottom-0 m-4 bg-black text-4xl text-white  rounded-full  flex justify-center  items-center w-16 h-16">
        {AddTask?"-":"+"}
      </div>
    </div>
  );
}

export default App;
