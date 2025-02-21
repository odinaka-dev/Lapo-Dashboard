import React from "react";
import { Link } from "react-router-dom";
import LogooImage from "../Img/LAPO_Logo_2022-removebg-preview 1.png";
import IconImage from "../assets/building-06.png";
import Logout from "../assets/logout-02.png";
import FooterImg from "../assets/Vector.png";

const Header = () => {
  return (
    <section className="hidden z-[9999] lg:block bg-[#002f6c] text-[#d0d5dd] lg:h-[100%] text-[14px]">
      <div className="m-6 mr-2">
        <Logo />
        <DashBoardMenu />
      </div>
    </section>
  );
};

const Logo = () => {
  return (
    <section className="Logo py-4 mb-12">
      <div className="">
        <img src={LogooImage} alt="" className="" />
      </div>
    </section>
  );
};

const DashBoardMenu = () => {
  const menu = [
    {
      id: 1,
      menuName: "Branch",
      menuIcon: IconImage,
    },
    {
      id: 2,
      menuName: "Roles",
      menuIcon: IconImage,
    },
    {
      id: 3,
      menuName: "users",
      menuIcon: IconImage,
    },
    {
      id: 4,
      menuName: "card scheme",
      menuIcon: IconImage,
    },
    {
      id: 5,
      menuName: "card profile",
      menuIcon: IconImage,
    },
    {
      id: 6,
      menuName: "card request",
      menuIcon: IconImage,
    },
    {
      id: 7,
      menuName: "stock",
      menuIcon: IconImage,
    },
    {
      id: 8,
      menuName: "cards",
      menuIcon: IconImage,
    },
    {
      id: 9,
      menuName: "Block/unblock card",
      menuIcon: IconImage,
    },
    {
      id: 10,
      menuName: "Generate/Reissue Pin",
      menuIcon: IconImage,
    },
    {
      id: 11,
      menuName: "Complaints: log",
      menuIcon: IconImage,
    },
    {
      id: 12,
      menuName: "Complaints: log",
      menuIcon: IconImage,
      menuIcon: IconImage,
    },
    {
      id: 13,
      menuName: "Complaints: Resolve",
      menuIcon: IconImage,
      menuIcon: IconImage,
    },
    {
      id: 14,
      menuName: "authorization list",
      menuIcon: IconImage,
      menuIcon: IconImage,
    },
    {
      id: 15,
      menuName: "authorization queue",
      menuIcon: IconImage,
    },
    {
      id: 16,
      menuName: "trails",
      menuIcon: IconImage,
    },
    {
      id: 17,
      menuName: "account",
      menuIcon: IconImage,
    },
  ];

  return (
    <section className="dashboard_links text-[14px]">
      <div className="Dashboard">
        <ul className="flex gap-4 items-center">
          <li className="rounded-lg p-2">Dashboard</li>
        </ul>
      </div>
      <p className="p-2 my-2 text-[#7E8B9C] text-[10px] uppercase">Main Menu</p>
      <div className="sub_links">
        <ul className="font-thin capitalize">
          {menu.map(({ menuName, menuIcon, id }) => (
            <li
              key={id}
              className="main_menu p-2  mb-4 rounded-lg px-2 hover:bg-white hover:text-cursor hover:text-[#002f6c] cursor-pointer  duration-300"
            >
              <div className="flex gap-2 items-center">
                <p>
                  <img src={`${menuIcon}`} alt="" />
                </p>
                <p>{menuName}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer_nav my-8">
        <div className="flex">
          <ul className="font-thin capitalize">
            <li className="main_menu p-2  mb-4 rounded-lg px-2 hover:bg-white hover:text-cursor hover:text-[#002f6c] cursor-pointer  duration-300">
              <div className="flex gap-2 items-center">
                <p>
                  <img src={Logout} alt="" />
                </p>
                <p>Logout</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="p-2 my-2 text-[#7E8B9C] text-[10px] uppercase">
            Powered by
          </p>
          <div>
            <img src={FooterImg} alt="" className="w-[60%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
