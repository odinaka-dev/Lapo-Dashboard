import React, { useState } from "react";
import LogOut from "../assets/log.png";
import { GoDotFill } from "react-icons/go";
import CardHeader from "../components/CardHeader";
import CardTableData from "../components/CardTable";
import LogComplaint from "../components/LogComplaint";

const CardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <section className="text-[14px] bg-[#F8FBFF]">
        <CardHeader />
        <div className="px-6">
          <FirstComponent isOpen={isOpen} setIsOpen={setIsOpen} />
          <CardTableData />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 h-[100vh] w-full flex justify-center items-center bg-[#000000a4] backdrop-blur-[2px]">
            <section className="">
              <LogComplaint isOpen={isOpen} setIsOpen={setIsOpen} />
            </section>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};

const FirstComponent = ({ setIsOpen }) => {
  return (
    <section className="first_component">
      <div className="py-4 border-b border-b-[#DEE6E2] leading-7 mb-2">
        <h1 className="text-[18px] font-normal">Log Complaint</h1>
        <p className="text-[#475467] text-[14px]">
          View details of logged complaints and log new ones here.
        </p>
      </div>
      <div className="sub_component flex justify-between items-center py-2 mb-4">
        <div className="pendNreview flex items-center">
          <button className="bg-white text-[#344054] flex items-center gap-2 border border-[#DEE6E2] rounded-l-[8px] p-2 px-4 cursor-pointer">
            <GoDotFill className="text-[#014DAF]" />
            Pending
          </button>
          <button className="bg-white text-[#344054] flex items-center gap-2 border border-[#DEE6E2] rounded-r-[8px] p-2 px-4 cursor-pointer">
            <span>Resolved</span>
          </button>
        </div>
        <div className="logout">
          <button
            onClick={() => setIsOpen(true)}
            className="flex gap-2 items-center bg-[#014DAF] p-2 px-6 rounded-sm text-white cursor-pointer"
          >
            <img src={LogOut} alt="" />
            <span>Log Complaint</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
