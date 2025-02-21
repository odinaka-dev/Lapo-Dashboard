import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileImage from "../Img/file-plus-02.png";
import Cancel from "../Img/x-close.png";
import { useDropzone } from "react-dropzone";
import UploadImage from "../Img/upload-cloud-02.png";

const LogComplaints = ({ isOpen, setIsOpen }) => {
  return (
    <section className="text-[#475467] modal bg-[white] p-4 rounded-md w-[400px]">
      <ComplaintsHeader isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

const ComplaintsHeader = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="modal_header flex justify-between items-center mb-4">
        <div className="modal_info flex items-start gap-4">
          <div className="icon_image p-2 border border-[#EAECF0] rounded-sm">
            <img src={FileImage} alt="" />
          </div>
          <div className="leading-7 mb-2">
            <h1 className="text-[16px] text-[#101828] font-semibold">
              Log Complaint
            </h1>
            <p className="text-[#475467] text-[14px]">
              Select category and fill in details
            </p>
          </div>
        </div>
        <div className="modal_cancel cursor-pointer">
          <button onClick={() => setIsOpen(false)}>
            <img src={Cancel} alt="" />
          </button>
        </div>
      </div>
      <div className="">
        <LogForm navigate={navigate} />
      </div>
    </React.Fragment>
  );
};

const LogForm = ({ navigate }) => {
  return (
    <React.Fragment>
      <form action="" className="">
        {/* category */}
        <div className="category flex flex-col items-start mb-4">
          <label htmlFor="" className="text-[#344054] font-medium mb-2">
            Category
          </label>
          <select
            className="outline-none border border-[#D0D5DD] rounded-md p-2 w-full"
            name=""
            id=""
            aria-placeholder="Select category from drop down"
          >
            <option value="">Select category from dropdown</option>
          </select>
        </div>
        {/* Account Number */}
        <div className="category flex flex-col items-start mb-4">
          <label htmlFor="" className="text-[#344054] font-medium mb-2">
            Account Number
          </label>
          <input
            type="text"
            placeholder="0123456789"
            className="outline-none border border-[#D0D5DD] rounded-md p-2 w-full"
          />
        </div>
        {/* Fixed Name */}
        <div className="category flex flex-col items-start mb-4">
          <label htmlFor="" className="text-[#344054] font-medium mb-2">
            Customer Name
          </label>
          <input
            type="text"
            placeholder="Nazeer Ajibola"
            className="outline-none border border-[#D0D5DD] rounded-md p-2 w-full"
          />
        </div>
        {/* Complaints details */}
        <div className="category flex flex-col items-start mb-4">
          <label htmlFor="" className="text-[#344054] font-medium mb-2">
            Complaints Details*
          </label>
          <textarea
            name=""
            id=""
            rows="3"
            placeholder="Describe Complaints"
            className="outline-none border border-[#D0D5DD] rounded-md p-2 w-full"
          ></textarea>
        </div>
        {/* Image */}
        <div className="category flex flex-col items-start mb-4">
          <label htmlFor="" className="text-[#344054] font-medium mb-2">
            Upload File (optional)
          </label>
          <div className="upload_file border border-[#D0D5DD] rounded-md p-2 w-full">
            <ImageDragComponent />
          </div>
        </div>
        {/* Button */}
        <div className="Proceed">
          <button
            onClick={() => navigate("/complaint-details/:id")}
            className="block w-full bg-[#014DAF] text-[#FFFFFF] p-2 rounded-sm cursor-pointer"
          >
            Proceed
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

const ImageDragComponent = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptFiles) => {
    setFiles(acceptFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "image/jpeg": [".jpg", ".jpeg"] },
    maxSize: 10 * 1024 * 1024,
  });

  return (
    <div className="w-full ">
      <div
        {...getRootProps()}
        className="rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <img src={UploadImage} alt="" />
        {isDragActive ? (
          <p className="text-blue-500">Drop the files here...</p>
        ) : (
          <p className="cursor-pointer">
            <span className="text-[#014DAF] font-medium">Click to upload</span>{" "}
            or drag and drop
          </p>
        )}
        <p className="text-gray-500 text-sm">PDF, JPG (max. 10mb)</p>
      </div>
      <div className="mt-4">
        {files.length > 0 && (
          <ul className="bg-gray-50 p-4 rounded-lg shadow">
            {files.map((file, index) => (
              <li key={index} className="text-gray-700">
                📄 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LogComplaints;
