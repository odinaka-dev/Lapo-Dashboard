import React from "react";
import CardHeader from "./CardHeader";

const ComplaintsDetails = () => {
  return (
    <section className="bg-[#F8FBFF]">
      <CardHeader />
      <div className="px-4 sm:px-6">
        <Details />
        <DetailForm />
      </div>
    </section>
  );
};

const Details = () => {
  return (
    <section className="">
      <div className="py-4 border-b border-b-[#DEE6E2] leading-7 mb-2">
        <h1 className="text-[18px] text-[#101828] font-medium">
          Complaint: Log
        </h1>
        <p className="text-[#475467] text-[14px]">
          View details of logged complaints and log new ones here..
        </p>
      </div>
    </section>
  );
};

const DetailForm = () => {
  return (
    <section className="bg-[#FFFFFF] border border-[#E2E2E2] p-4 pb-24 rounded-md mt-4 mb-4 sm:mb-0">
      <h1 className="text-[18px] text-[#101828] font-medium">
        Complaint Details
      </h1>
      <form action="" className="mt-4 text-[#101828]">
        <div className="grid sm:grid-cols-2 sm:gap-16 w-full my-4 mt-8">
          <div className="category flex flex-col items-start mb-4">
            <label
              htmlFor=""
              className="text-[#344054] font-medium mb-2 text-[14px]"
            >
              Complaint Category
            </label>
            <input
              type="text"
              placeholder="Card Dispute"
              className="outline-none bg-[#F5F5F7] border border-[#D0D5DD] rounded-md p-2 w-full"
            />
          </div>
          <div className="category flex flex-col items-start mb-4 text-[14px]">
            <label htmlFor="" className="text-[#344054] font-medium mb-2">
              Branch
            </label>
            <input
              type="text"
              placeholder="Head Office"
              className="outline-none bg-[#F5F5F7] border border-[#D0D5DD] rounded-md p-2 w-full"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-16 w-full my-4">
          <div className="category flex flex-col items-start mb-4">
            <label
              htmlFor=""
              className="text-[#344054] font-medium mb-2 text-[14px]"
            >
              Account Number
            </label>
            <input
              type="text"
              placeholder="0123456789"
              className="outline-none bg-[#F5F5F7] border border-[#D0D5DD] rounded-md p-2 w-full"
            />
          </div>
          <div className="category flex flex-col items-start mb-4 text-[14px]">
            <label htmlFor="" className="text-[#344054] font-medium mb-2">
              Customer Name
            </label>
            <input
              type="text"
              placeholder="Nazeer"
              className="outline-none bg-[#F5F5F7] border border-[#D0D5DD] rounded-md p-2 w-full"
            />
          </div>
        </div>
        <div className="category flex flex-col items-start mb-4">
          <label htmlFor="" className="text-[#344054] font-medium mb-2">
            Complaints Details
          </label>
          <textarea
            name=""
            id=""
            rows="3"
            placeholder="Complaints Details..."
            className="outline-none bg-[#F5F5F7] border border-[#D0D5DD] rounded-md p-2 w-full"
          ></textarea>
        </div>
      </form>
      <div>
        <ComplaintsDetailsInfo />
      </div>
    </section>
  );
};

const ComplaintsDetailsInfo = () => {
  return (
    <section className="">
      <div className="grid grid-cols-2 w-full gap-10 text-[#344054] text-[14px]">
        <div className="submission">
          <h1 className="text-[14px] font-medium mb-2">Submission Date</h1>
          <p className="text-[#101828]">11/14/2024 10:27:43</p>
        </div>
        <div className="submission">
          <h1 className="text-[14px] font-medium mb-2">Status</h1>
          <p className="inline-block text-[#067647] bg-[##ECFDF3] border border-[#ABEFC6] rounded-[50px] p-2 px-6">
            Resolved
          </p>
        </div>
        <div className="submission">
          <h1 className="text-[14px] font-medium mb-2">Resolved By</h1>
          <p className="text-[#101828]">Manager</p>
        </div>
        <div className="submission">
          <h1 className="text-[14px] font-medium mb-2">Attachment</h1>
          <p className="text-[#101828]">None</p>
        </div>
        <div className="submission">
          <h1 className="text-[14px] font-medium mb-2">Resolution Date</h1>
          <p className="text-[#101828]">11/14/2024 10:27:43</p>
        </div>
      </div>
    </section>
  );
};

export default ComplaintsDetails;
