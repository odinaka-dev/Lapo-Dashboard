import React from "react";
import { IoIosSearch } from "react-icons/io";
import Calender from "../Img/calendar.png";
import Filter from "../Img/filter-lines.png";

const CardTableData = () => {
  return (
    <section className=" mb-8">
      <CardDisplayComponent />
      <ComplaintsTable />
    </section>
  );
};

// search functionality

const CardDisplayComponent = () => {
  return (
    <section className="component bg-[#F9FAFB] p-2 border-[1px] border-[#DEE6E2] rounded-t-[5px]">
      <div className="display flex justify-between items-center">
        <form action="">
          <div className="search_inp bg-white border-[1px] border-[#DEE6E2] flex gap-2 items-center text-[14px] p-2 px-4 rounded-sm">
            <IoIosSearch className="text-[#667085] text-[18px]" />
            <input
              type="search"
              className="bg-none border-none w-full lg:w-[300px] outline-none text-[#667085] capitalize"
              placeholder="Search complaint"
            />
          </div>
        </form>
        <div className="filter flex gap-2 items-center text-[#344054]">
          <div className="calender flex items-center gap-2 bg-white p-2 px-4 rounded-[5px] border border-[#DEE6E2] cursor-pointer">
            <img src={Calender} alt="" />
            <span>Date</span>
          </div>
          <div className="filter flex items-center gap-2 bg-white p-2 px-4 rounded-[5px] border border-[#DEE6E2] cursor-pointer">
            <img src={Filter} alt="" />
            <span>Filter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// the main table data using json format

const ComplaintsTable = () => {
  const ComplaintsData = [
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
    {
      accountNumber: "0123456789",
      customerName: "Nazeer Ajibola",
      submissionDate: "11/14/2024 10:27:43",
      category: "Card Dispute",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b border-b-[#EAECF0]">
              <th className="py-3 px-4 text-left text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Account Number
              </th>
              <th className="py-3 px-4 text-center text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Customer Name
              </th>
              <th className="py-3 px-4 text-center text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Submission Date
              </th>
              <th className="py-3 px-4 text-center text-[#475467] font-normal border-r border-r-[#EAECF0]">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {ComplaintsData.map((complaint, index) => (
              <tr
                key={index}
                className="border-b border-b-[#EAECF0] text-[#475467] text-[12px] hover:bg-gray-50"
              >
                <td className="py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.accountNumber}
                </td>
                <td className="text-center py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.customerName}
                </td>
                <td className="text-center py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.submissionDate}
                </td>
                <td className="text-center py-3 px-4 border-r border-r-[#EAECF0]">
                  {complaint.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-b border-r border-b-[#EAECF0] border-r-[#EAECF0] w-full pagination text-[#475467] flex justify-between items-center p-2">
          <div className="page_information capitalize">
            <p className="font-medium">Page 1 of 20</p>
          </div>
          <div className="pagination_button flex gap-2 items-center">
            <button className="p-2 border border-[#EAECF0] rounded-sm">
              Previous
            </button>
            <button className="p-2 border border-[#EAECF0] rounded-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// the main table data in html jsx format

export default CardTableData;
