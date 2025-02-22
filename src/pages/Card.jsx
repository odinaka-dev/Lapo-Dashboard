import React, { useState } from "react";
import LogOut from "../assets/log.png";
import { GoDotFill } from "react-icons/go";
import CardHeader from "../components/CardHeader";
import CardTableData from "../components/CardTable";
import LogComplaint from "../components/LogComplaint";
import FilterComponent from "../components/Filter";

const CardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <React.Fragment>
      <section className="text-[14px] bg-[#F8FBFF]">
        <CardHeader />
        <div className="px-4 sm:px-6">
          <FirstComponent isOpen={isOpen} setIsOpen={setIsOpen} />
          <CardTableData
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
          />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#000000a4] backdrop-blur-[2px]">
            <section className="">
              <LogComplaint isOpen={isOpen} setIsOpen={setIsOpen} />
            </section>
          </div>
        )}
        <div>
          <div>
            {filterOpen && (
              <div className="fixed top-0 left-0 h-[100%] w-full flex justify-center items-center bg-[#000000a4] backdrop-blur-[2px]">
                <section className="">
                  <FilterComponent
                    filterOpen={filterOpen}
                    setFilterOpen={setFilterOpen}
                  />
                </section>
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const FirstComponent = ({ setIsOpen }) => {
  return (
    <section className="first_component">
      <div className="py-4 border-b border-b-[#DEE6E2] leading-7 mb-2">
        <h1 className="text-[18px] text-[#101828] font-medium">
          Log Complaint
        </h1>
        <p className="text-[#475467] text-[14px]">
          View details of logged complaints and log new ones here.
        </p>
      </div>
      <div className="sub_component flex justify-between items-center gap-2 py-2 mb-4">
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
            <span className="hidden sm:block">Log Complaint</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
