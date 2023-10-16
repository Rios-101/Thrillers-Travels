import React from "react";

const FormsSection = () => {
  const style = {
    fontFamily: "'Pacifico', cursive",
    // color: "#303555",
  };

  return (
    <div className="w-[100%] flex flex-col justify-between lg:w-[20%]  bg-[#F3F6FD]">
      <div>
        <h2
          style={style}
          className=" pt-8 pb-2 px-14 text-center lg:text-start text-[#303555] text-[30px] "
        >
          Mima<span className="text-[#696969]">Booking</span>
        </h2>
        <div className="flex justify-center">
          <div class=" mr-2 w-20 h-20 relative flex justify-center items-center rounded-full text-xl text-white border-2 p-1 border-[#2d3253]">
            <img
              src="http://source.unsplash.com/100x100/?woman"
              className="rounded-full"
              alt="prfile"
            />
            <div className="absolute flex justify-center items-center -bottom-3 w-6 h-6 rounded-full bg-[#2d3253]">
              <i className="pl-1 text-[10px] far fa-edit "></i>
            </div>
          </div>
        </div>
        <h2
          style={style}
          className="text-center pt-6 text-[#303555] text-[20px]"
        >
          Ben Grim
        </h2>
      </div>
      <div className="pl-10">
        <div className="flex gap-3 py-2 items-center">
          <i className="fas fa-home text-[#2d3253]"></i>
          <h3 style={style} className="text-[#2d3253]">
            Dashboard
          </h3>
        </div>
        <div className="flex gap-3 py-2 items-center">
          <i className="fas fa-dot-circle text-[#696969]"></i>
          <h3 style={style} className="text-[#696969]">
            Explore City
          </h3>
        </div>
        <div className="flex gap-3 py-2 items-center">
          <i className="fas fa-inbox text-[#696969]"></i>
          <h3 style={style} className="text-[#696969]">
            Ticket
          </h3>
        </div>
        <div className="flex gap-3 py-2 items-center">
          <i className="fas fa-heart text-[#696969]"></i>
          <h3 style={style} className="text-[#696969]">
            Favorites
          </h3>
        </div>
        <div className="flex gap-3 py-2 items-center">
          <i className="fas fa-cog text-[#696969]"></i>
          <h3 style={style} className="text-[#696969]">
            setting
          </h3>
        </div>
      </div>

      <div className="pl-10">
        <div className="flex gap-3 py-2 items-center">
          <i className="fas fa-sign-out-alt text-[#696969]"></i>
          <h3 style={style} className="text-[#696969]">
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FormsSection;
