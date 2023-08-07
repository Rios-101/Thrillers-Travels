import React, { useState } from "react";
import { searchData } from "../data";
import Pagination from "./Pagination";

const ResultsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const searchPage = searchData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="w-[100%] lg:w-[65%] p-8 bg-[#E9F0F8]">
      <div className="flex justify-between">
        <div>
          <h2 className="lg:text-[35px] text-[25px] text-[#636E8B]">
            Search Results
          </h2>
          <p className="text-[#bbbfd8]">We found 15 results</p>
        </div>
        <div className="text-center lg:text-start">
          <button className="bg-white my-2 lg:my-0 hover:bg-[#6682e3] hover:text-white text-[#C8CCE0]  py-2 px-4 rounded-[30px] mx-2">
            CHEAPEST
          </button>
          <button className="bg-white my-2 lg:my-0 hover:bg-[#6682e3] hover:text-white text-[#C8CCE0]  py-2 px-4 rounded-[30px] mx-2">
            SHORTEST
          </button>
          <button className="bg-white my-2 lg:my-0 hover:bg-[#6682e3] hover:text-white text-[#C8CCE0]  py-2 px-4 rounded-[30px] mx-2">
            RECOMENDED
          </button>
        </div>
      </div>
      <div className="flex items-center py-4 ">
        <h2 className="text-[#697490] lg:text-[30px] text-[20px] pr-8 font-bold">
          London
        </h2>
        <i className="fas fa-arrow-right text-[#9fa5c4] text-[20px]"></i>
        <h2 className="text-[#697490] lg:text-[30px] text-[20px] pl-8 font-bold">
          New York
        </h2>
      </div>
      <div>
        {searchPage.map((ele) => {
          return (
            <div
              key={ele.id}
              className="flex bg-white justify-between items-center py-3 px-8 rounded-[15px] my-3 hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"
            >
              <img src={ele.airline} width="100" height="100" alt="" />
              <div className="lg:flex items-center gap-9 hidden">
                <div>
                  <p className="text-[#b6bed5]">Depart</p>
                  <p className="text-[#636E8B]">{ele.departureDate}</p>
                  <p className="text-[#697490] font-bold">
                    {ele.departureTime}
                  </p>
                </div>
                <div className="flex flex-col">
                  <button className="bg-[#484862]  text-white  py-1 px-1 rounded-[30px] mx-2">
                    {`${ele.stops} Stop`}
                  </button>
                  <p className="text-[#b6bed5]">{ele.hours}</p>
                </div>
                <div>
                  <p className="text-[#b6bed5]">Arrive</p>
                  <p className="text-[#636E8B]">{ele.arriveDate}</p>
                  <p className="text-[#697490] font-bold">{ele.arriveTime}</p>
                </div>
              </div>
              <div className="">
                <p className="text-[#b6bed5]">Price</p>
                <p className="text-[#697490] font-bold text-[30px]">{`₦ ${ele.price}K`}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPosts={searchData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ResultsSection;
