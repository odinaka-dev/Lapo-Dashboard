import React from "react";
import { Link } from "react-router-dom";
import LogooImage from "../Img/LAPO_Logo_2022-removebg-preview 1.png";
import IconImage from "../assets/building-06.png";
import Logout from "../assets/logout-02.png";
import FooterImg from "../assets/Vector.png";

const Header = () => {
  return (
    <section className="bg-[#002f6c] text-[#d0d5dd] h-[100%] text-[14px]">
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
      menuName: "Branch",
      menuIcon: IconImage,
    },
    {
      menuName: "Roles",
      menuIcon: IconImage,
    },
    {
      menuName: "users",
      menuIcon: IconImage,
    },
    {
      menuName: "card scheme",
      menuIcon: IconImage,
    },
    {
      menuName: "card profile",
      menuIcon: IconImage,
    },
    {
      menuName: "card request",
      menuIcon: IconImage,
    },
    {
      menuName: "stock",
      menuIcon: IconImage,
    },
    {
      menuName: "cards",
      menuIcon: IconImage,
    },
    {
      menuName: "Block/unblock card",
      menuIcon: IconImage,
    },
    {
      menuName: "Generate/Reissue Pin",
      menuIcon: IconImage,
    },
    {
      menuName: "Complaints: log",
      menuIcon: IconImage,
    },
    {
      menuName: "Complaints: log",
      menuIcon: IconImage,
      menuIcon: IconImage,
    },
    {
      menuName: "Complaints: Resolve",
      menuIcon: IconImage,
      menuIcon: IconImage,
    },
    {
      menuName: "authorization list",
      menuIcon: IconImage,
      menuIcon: IconImage,
    },
    {
      menuName: "authorization queue",
      menuIcon: IconImage,
    },
    {
      menuName: "trails",
      menuIcon: IconImage,
    },
    {
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
      <div className="sub_links">
        <p className="p-2 my-2 text-[#7E8B9C] text-[10px] uppercase">
          Main Menu
        </p>
        {menu.map(({ menuName, menuIcon }) => (
          <ul className="font-thin capitalize">
            <li className="main_menu p-2  mb-4 rounded-lg px-2 hover:bg-white hover:text-cursor hover:text-[#002f6c] cursor-pointer  duration-300">
              <div className="flex gap-2 items-center">
                <p>
                  <img src={`${menuIcon}`} alt="" />
                </p>
                <p>{menuName}</p>
              </div>
            </li>
          </ul>
        ))}
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
