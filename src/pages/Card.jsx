import React from "react";
import File from "../assets/complaints.png";
import { FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import LogOut from "../assets/log.png";

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

// the header of the card table
const CardHeader = () => {
  return (
    <section className="bg-white border-b border-b-[#DEE6E2] p-4">
      <div className="card_header flex justify-between items-center">
        <div className="main_one flex gap-2 items-center">
          <img src={File} alt="" />
          <h1>Log Complaint</h1>
        </div>
        <div className="main_2 text-[16px] flex gap-4 items-center">
          <FaRegBell />
          <div className="bg-[#DEE6E2] p-2 rounded-[50%]">
            <FiUser />
          </div>
        </div>
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
      <div className="sub_component">
        <div className="pendNreview"></div>
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
