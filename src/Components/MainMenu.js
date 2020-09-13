import React, { useState } from "react";

function MainMenu() {
    const [length, setLength] = useState(0)
    let weight;


  return (
    <div className="mx-64">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Fillament Type
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>PLA</option>
            <option>ABS</option>
            <option>PETG</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
           Weight (g)
          </label>
          <input
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="weight"
            value={weight}
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setLength(weight * 14.6) }
          >
            Calculate
          </button>
        </div>
      </form>

      <h1>Total Length Used: { length }inches</h1>
    </div>
  );
}

export default MainMenu;
