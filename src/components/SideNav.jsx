import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SourceIcon from "@mui/icons-material/Source";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink, Link } from "react-router-dom";
import { usePlayerContext } from "../Context/PlayerContext";
import InfoIcon from "@mui/icons-material/Info";
import LogoText from "./assets/LogoText";
import RippleButton from "ripple-effect-reactjs";
import { useUserContext } from "../Context/UserContext";

const SideNav = () => {
  const { HandleSideNav, side_navbar_show } = usePlayerContext();
  const { login_success } = useUserContext();
  return (
    <div className={"float-left w-52 h-[26rem] max-md:w-0 select-none"}>
      <div
        className={
          "bg-lightBlue text-darkTextColor top-0  w-52 transition-all duration-200 ease-linear  fixed z-50 h-full  py-10 " +
          (side_navbar_show ? "max-md:w-64 left-0" : "max-md:-left-52")
        }
      >
        <section className="px-7 max-md:px-10 ">
          <section className="scale-105">
            Radio Adventista
            {/* <LogoText /> */}
          </section>

          <section className="mt-6">
            <h3 className="uppercase font-Rubik font-medium tracking-wider max-md:text-lg text-sm">
              Menu
            </h3>
            <ul className="flex flex-col gap-6 mt-5">
              <NavLink
                onClick={HandleSideNav}
                // to={"/"}
                to={"/recentsongs"}
                className="flex items-center gap-4 text-sm max-md:text-base font-medium"
              >
                <ExploreIcon />
                Radio
              </NavLink>
              {/* <NavLink
                onClick={HandleSideNav}
                to={"/topartist"}
                className="flex items-center gap-4 text-sm max-md:text-base font-medium"
              >
                <AccountBoxIcon />
                Top Artists
              </NavLink> */}
              <NavLink
                onClick={HandleSideNav}
                to={"topplaylists/Hindi"}
                className="flex items-center gap-4 text-sm max-md:text-base font-medium"
              >
                <AssessmentIcon />
                Grabaciones
              </NavLink>
            </ul>
          </section>
        </section>

        <hr className="bg-darkTextColor h-[0.8px] opacity-10 my-6 px-7" />

        <section className="px-7 max-md:px-10">
          <h3 className="uppercase font-Rubik font-medium tracking-wider text-sm">
            Libreria
          </h3>
          <ul className="flex flex-col gap-6 mt-5">
            <NavLink
              onClick={HandleSideNav}
              // to={"/recentsongs"}
              to={"/"}
              className="flex items-center gap-4 text-sm max-md:text-base font-medium"
            >
              <DonutSmallIcon />
              Audio
            </NavLink>
            <NavLink
              onClick={HandleSideNav}
              // to={"/userplaylists"}
              to={"/Videos"}
              className="flex items-center  gap-4 text-sm max-md:text-base font-medium"
            >
              <SubscriptionsIcon />
              video
            </NavLink>
            <NavLink
              onClick={HandleSideNav}
              to={"/favoritessongs"}
              className="flex items-center gap-4 text-sm max-md:text-base font-medium"
            >
              <FavoriteIcon /> Favoritos
            </NavLink>
          </ul>
        </section>
        <hr className="bg-darkTextColor h-[0.8px] opacity-10 my-6 px-7" />
        <section className="px-7 max-md:px-10 mt-5">
          <ul className="flex flex-col gap-6 mt-2">
            <NavLink
              onClick={HandleSideNav}
              to={"/about"}
              className="flex items-center gap-4 text-sm max-md:text-base font-medium"
            >
              <InfoIcon /> Acerca De
            </NavLink>
          </ul>
          {/* <button>Dark</button> */}
        </section>
        <div className="absolute bottom-5  flex justify-center right-0 left-0">
          <a
            className="text-xs"
            href="https://swoou.com/"
            target={"_blank"}
          >
            Desarrollado por <span className="text-neutral-200">Swoou.com</span>
          </a>
     
        </div>
        {!login_success && (
          <section className="px-7  mt-10 hidden gap-2 max-md:flex">
            <RippleButton color={"#519aff2e"} speed={500}>
              <Link
                onClick={HandleSideNav}
                to={"/login"}
                className="text-white text-lg block hover:opacity-90 bg-[#519aff2e] w-full pl-5 py-3 rounded-md"
              >
                Log In
              </Link>
            </RippleButton>
            <RippleButton color={"#959aff8e"} radius={6} speed={500}>
              <Link
                onClick={HandleSideNav}
                to={"/signup"}
                className="bg-skyBlue bg-opacity-70 block text-lg text-white rounded-md pl-4 py-3  "
              >
                Sign up
              </Link>
            </RippleButton>
          </section>
        )}
      </div>
      <div
        className={
          "fixed z-30 h-full max-md:block hidden top-0 w-full bg-[#0c0c0cc7] transition-all duration-200 ease-in " +
          (side_navbar_show ? "visible opacity-100" : "invisible opacity-0")
        }
        onClick={HandleSideNav}
      ></div>
    </div>
  );
};

export default SideNav;
