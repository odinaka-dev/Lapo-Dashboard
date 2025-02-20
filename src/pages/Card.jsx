import React from "react";
import LogOut from "../assets/log.png";
import { GoDotFill } from "react-icons/go";
import CardHeader from "../components/CardHeader";

const CardComponent = () => {
  return (
    <section className="text-[12px] bg-[#F8FBFF]">
      <CardHeader />
      <div className="px-6">
        <FirstComponent />
      </div>
    </section>
  );
};

const FirstComponent = () => {
  return (
    <section className="first_component">
      <div className="py-4 border-b border-b-[#DEE6E2] leading-7 mb-2">
        <h1 className="text-[18px] font-normal">Log Complaint</h1>
        <p className="text-[#475467] text-[14px]">
          View details of logged complaints and log new ones here.
        </p>
      </div>
      <div className="sub_component flex justify-between items-center">
        <div className="pendNreview flex items-center">
          <button className="border border-[#DEE6E2] rounded-l-[8px] p-2 px-8 cursor-pointer">
            Pending
          </button>
          <button className="flex items-center gap-2 border border-[#DEE6E2] rounded-r-[8px] p-2 px-8 cursor-pointer">
            <GoDotFill className="text-[#014DAF]" />
            <span>Resolved</span>
          </button>
        </div>
        <div className="logout">
          <button className="flex gap-2 items-center bg-[#014DAF] p-2 px-6 rounded-sm text-white cursor-pointer">
            <img src={LogOut} alt="" />
            <span>Log Complaint</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
