import React from "react";
import { motion } from "framer-motion";
import LogooImage from "../Img/LAPO_Logo_2022-removebg-preview 1.png";
import Logout from "../assets/logout-02.png";
import FooterImg from "../assets/Vector.png";
// the icons for the navigation
import DashboardIcon from "../assets/home-03.png";
import IconImage from "../assets/building-06.png";
import Roles from "../assets/user-shield-01.png";
import Users from "../assets/user-group.png";
import CardScheme from "../assets/setting-05.png";
import Cards from "../assets/credit-card-pos.png";
import CardRequest from "../assets/credit-card-accept.png";
import Istock from "../assets/chart-bar-line.png";
import Cards2 from "../assets/credit-card.png";
import Block from "../assets/credit-card-not-found.png";
import Generate from "../assets/pin-code.png";
import Resolve from "../assets/file-verified.png";
import Authorized from "../assets/list.png";
import Authorized2 from "../assets/layers-three-01.png";
import Trail from "../assets/map-01.png";
import Account from "../assets/user.png";
import { LuFileText } from "react-icons/lu";

const sidebarVariants = {
  hidden: { x: -250, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.3 },
  }),
};

const Header = () => {
  return (
    <motion.section
      className="hidden z-[9999] lg:block bg-[#002f6c] text-[#d0d5dd] lg:h-[100%] text-[14px]"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="m-6 mr-2">
        <Logo />
        <DashBoardMenu />
      </div>
    </motion.section>
  );
};

const Logo = () => {
  return (
    <motion.section
      className="Logo py-4 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={LogooImage} alt="Logo" className="" />
    </motion.section>
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
      menuIcon: Roles,
    },
    {
      id: 3,
      menuName: "users",
      menuIcon: Users,
    },
    {
      id: 4,
      menuName: "card scheme",
      menuIcon: CardScheme,
    },
    {
      id: 5,
      menuName: "card profile",
      menuIcon: Cards,
    },
    {
      id: 6,
      menuName: "card request",
      menuIcon: CardRequest,
    },
    {
      id: 7,
      menuName: "stock",
      menuIcon: Istock,
    },
    {
      id: 8,
      menuName: "cards",
      menuIcon: Cards2,
    },
    {
      id: 9,
      menuName: "Block/unblock card",
      menuIcon: Block,
    },
    {
      id: 10,
      menuName: "Generate/Reissue Pin",
      menuIcon: Generate,
    },
    {
      id: 11,
      menuName: "Complaints: log",
      menuIcon: Resolve,
    },
    {
      id: 12,
      menuName: "Complaints: Resolve",
      menuIcon: Resolve,
    },
    {
      id: 13,
      menuName: "authorization list",
      menuIcon: Authorized,
    },
    {
      id: 14,
      menuName: "authorization queue",
      menuIcon: Authorized2,
    },
    {
      id: 15,
      menuName: "trails",
      menuIcon: Trail,
    },
    {
      id: 16,
      menuName: "account",
      menuIcon: Account,
    },
  ];

  return (
    <motion.section className="dashboard_links text-[14px]">
      <motion.div className="Dashboard" initial="hidden" animate="visible">
        <ul className="flex items-center hover:bg-[#E4F0FF] hover:text-[#002f6c] cursor-pointer duration-300 rounded-md">
          <img src={DashboardIcon} alt="" />
          <li className="rounded-lg p-2">Dashboard</li>
        </ul>
      </motion.div>
      <p className="p-2 my-2 text-[#7E8B9C] text-[10px] uppercase">Main Menu</p>
      <div className="sub_links">
        <ul className="font-thin capitalize">
          {menu.map(({ menuName, menuIcon, id }) => (
            <motion.li
              key={id}
              className="main_menu p-2 mb-4 rounded-lg px-2 hover:bg-[#E4F0FF] hover:text-[#002f6c] cursor-pointer duration-300 flex gap-2 items-center"
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              custom={id}
            >
              <img src={menuIcon} alt="icon" />
              <p>{menuName}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      <Footer />
    </motion.section>
  );
};

const Footer = () => {
  return (
    <motion.div
      className="footer_nav my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex">
        <ul className="font-thin capitalize">
          <li className="main_menu p-2 mb-4 rounded-lg px-2 hover:bg-white hover:text-[#002f6c] cursor-pointer duration-300 flex gap-2 items-center">
            <img src={Logout} alt="logout" />
            <p>Logout</p>
          </li>
        </ul>
      </div>
      <p className="p-2 my-2 text-[#7E8B9C] text-[10px] uppercase">
        Powered by
      </p>
      <img src={FooterImg} alt="footer logo" className="w-[60%]" />
    </motion.div>
  );
};

export default Header;
