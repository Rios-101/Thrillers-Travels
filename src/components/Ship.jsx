import React from "react";

const Ship = () => {
  const style = {
    fontFamily: "'Pacifico', cursive",
    color: "#5060A9",
  };

  return (
    <div className="p-5">
      <h2 className="text-[35px]">
        Best Train deals with <span style={style}>Thrillers Travels</span>
      </h2>

      <form>
        <div className="py-2">
          <label
            htmlFor="departForm"
            className="block text-sm font-medium leading-6 text-[#747F99]"
          >
            Depart From
          </label>
          <div className="relative mt-.5 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <i class="fas fa-ship"></i>
              </span>
            </div>
            <input
              type="text"
              name="departForm"
              id="departForm"
              className="block w-full rounded-md border-0 py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="London-All Airports,England,Uk"
            />
          </div>
        </div>

        <div className="py-2">
          <label
            htmlFor="arriveAt"
            className="block text-sm font-medium leading-6 text-[#747F99]"
          >
            Arrive At
          </label>
          <div className="relative mt-.5 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <i class="fas fa-ship"></i>
              </span>
            </div>
            <input
              type="text"
              name="arriveAt"
              id="arriveAt"
              className="block w-full rounded-md border-0 py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="New York-All Airport,New York,USA"
            />
          </div>
        </div>

        <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-[#747F99]"
            >
              Departure Date
            </label>
            <div className="mt-.5">
              <input
                type="date"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-[#747F99] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-[#747F99]"
            >
              Arrive Date
            </label>
            <div className="mt-.5">
              <input
                type="date"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-[#747F99] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="class"
              className="block text-sm font-medium leading-6 text-[#747F99]"
            >
              Class
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <i className="fas fa-coins"></i>
                </span>
              </div>
              <select
                type="text"
                name="class"
                id="class"
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-[#747F99] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="pessengers"
              className="block text-sm font-medium leading-6 text-[#747F99]"
            >
              Pessengers
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="number"
                name="pessengers"
                id="pessengers"
                placeholder="2"
                className="block w-full rounded-md border-0 py-1.5 pl-10  text-[#747F99] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                min={0}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          class="mt-5 w-full px-4 py-3 bg-[#6682E3] rounded-md text-[#FEFEFF] outline-none focus:ring-4 shadow-lg "
        >
          Find Flight
        </button>
      </form>
    </div>
  );
};

export default Ship;
