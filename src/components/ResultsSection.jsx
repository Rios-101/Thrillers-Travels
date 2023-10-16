import React from "react";

const ResultsSection = () => {
  return (
    <div className="w-[100%] lg:w-[80%] p-8 bg-[#ffffff]">
      <div className="relative flex items-center border rounded-md p-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none focus:ring focus:ring-blue-300 rounded-md pr-10"
        />

        <input
          type="date"
          value="2023-05-03"
          className="absolute right-0 top-2 focus:ring focus:ring-blue-300"
        />

        <i className="fas fa-bell absolute right-3 top-4 text-gray-600 text-[25px]"></i>
      </div>

      <header className="section__container header__container">
        <div className="header__image__container">
          <div className="header__content"></div>
          <div className="booking__container">
            <form>
              <div className="form__group">
                <div className="input__group">
                  <input type="text" />
                  <label>Location</label>
                </div>
                <p>Where are you going?</p>
              </div>
              <div className="form__group">
                <div className="input__group">
                  <input type="text" />
                  <label>Check In</label>
                </div>
                <p>Add date</p>
              </div>

              <div className="form__group">
                <div className="input__group">
                  <input type="text" className="outline-none" />
                  <label>Guests</label>
                </div>
                <p>Add guests</p>
              </div>
            </form>
            <button className="btn">
              <i className="ri-search-line"></i>
            </button>
          </div>
        </div>
      </header>

      <div>
        <h2 className="text-[#303555] font-bold">Trending Destination</h2>
        <div className="lg:grid lg:grid-cols-3 gap-2 ">
          <div className="max-w-sm flex rounded overflow-hidden shadow-lg my-6 lg:my-0">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="Item 1"
              className="w-[100px] h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>

          <div className="max-w-sm flex rounded overflow-hidden shadow-lg   my-6 lg:my-0">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
              alt="Hotel 1"
              className="w-[100px] h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>

          <div className="max-w-sm flex rounded overflow-hidden shadow-lg  my-6 lg:my-0">
            <img
              src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
              alt="Hotel 1"
              className="w-[100px] h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between pt-4">
          <h2 className="text-[#303555] font-bold">Best Offer</h2>
          <h3 className="text-[#303555]">View All</h3>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 space-x-4">
          <div className="max-w-sm  rounded overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="Item 1"
              className="w-full h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
              alt="Hotel 1"
              className="w-full h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>

          <div className="max-w-sm  rounded overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="Hotel 1"
              className="w-full h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>

          <div className="max-w-sm  rounded overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              alt="Hotel 1"
              className="w-full h-[100px] p-1 rounded-lg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name of Hotel 1</div>
              <p className="text-gray-700 text-base">Description of Hotel 1</p>
              <p className="text-gray-800 text-xl mt-2">Price: $19.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
