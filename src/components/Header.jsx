import React from "react";
import { motion } from "framer-motion";
import LogooImage from "../Img/LAPO_Logo_2022-removebg-preview 1.png";
import IconImage from "../assets/building-06.png";
import Logout from "../assets/logout-02.png";
import FooterImg from "../assets/Vector.png";

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
    "Branch",
    "Roles",
    "Users",
    "Card Scheme",
    "Card Profile",
    "Card Request",
    "Stock",
    "Cards",
    "Block/Unblock Card",
    "Generate/Reissue Pin",
    "Complaints: Log",
    "Complaints: Resolve",
    "Authorization List",
    "Authorization Queue",
    "Trails",
    "Account",
  ];

  return (
    <motion.section className="dashboard_links text-[14px]">
      <motion.div className="Dashboard" initial="hidden" animate="visible">
        <ul className="flex gap-4 items-center">
          <li className="rounded-lg p-2">Dashboard</li>
        </ul>
      </motion.div>
      <p className="p-2 my-2 text-[#7E8B9C] text-[10px] uppercase">Main Menu</p>
      <div className="sub_links">
        <ul className="font-thin capitalize">
          {menu.map((menuName, index) => (
            <motion.li
              key={index}
              className="main_menu p-2 mb-4 rounded-lg px-2 hover:bg-white hover:text-[#002f6c] cursor-pointer duration-300 flex gap-2 items-center"
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <img src={IconImage} alt="icon" />
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
