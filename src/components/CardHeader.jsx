import React from "react";
import File from "../assets/complaints.png";
import { FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";

// the header of the card table
const CardHeader = () => {
  return (
    <section className="bg-white border-b border-b-[#DEE6E2] p-4">
      <div className="card_header flex justify-between items-center">
        <div className="flex items-center gap-4">
          <IoIosMenu className="lg:hidden text-[24px] cursor-pointer" />
          <div className="main_one flex gap-2 items-center">
            <img src={File} alt="" />
            <h1>Log Complaint</h1>
          </div>
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

export default CardHeader;
