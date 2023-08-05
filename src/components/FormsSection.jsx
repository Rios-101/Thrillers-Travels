import React, { useState } from "react";
import { navTab } from "../data";

const FormsSection = () => {
  const style = {
    fontFamily: "'Pacifico', cursive",
    color: "#5060A9",
  };

  const [activeTab, setActiveTab] = useState(navTab[0]); // Set the initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[35%]  bg-[#F3F6FD]">
      <h2 style={style} className=" p-8 text-[30px]">
        Thrillers Travels
      </h2>
      <div className="grid grid-cols-4 gap-1">
        {navTab.map((ele) => {
          const isActive = ele.id === activeTab.id;
          return (
            <div
              key={ele.id}
              className={`text-center  p-4 cursor-pointer ${
                isActive
                  ? "bg-[#73C684] text-white shadow-[rgba(0,_0,_0,_0.2)_0px_10px_40px_-7px]"
                  : "text-[#C1C4DA] bg-white hover:bg-[#73C684] hover:text-white"
              }`}
              onClick={() => handleTabClick(ele)}
            >
              <i className={ele.font}></i>
              <p>{ele.name}</p>
            </div>
          );
        })}
      </div>
      {/* Render the active tab's content */}
      {activeTab.component}
    </div>
  );
};

export default FormsSection;
