import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HeaderItem from "../components/header_item";
import { headerLinks } from "../data/constants";

type Props = {
  className?: string | undefined;
};

const HeaderSection = (props: Props) => {
  const [headerActive, setHeaderActive] = useState(false);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;

    const nav = document.querySelector("#HeaderSection");
    let menu = document.querySelector("#app-menu");

    menu?.classList.add("hidden");

    if (pageYOffset > 0) {
      nav?.classList.add("shadow-xl");
      setHeaderActive(true);
    } else {
      nav?.classList.remove("shadow-xl");
      setHeaderActive(false);
    }

    const navLinks = document.querySelectorAll(".header-item");
    const mobileNavLinks = document.querySelectorAll(".header-item-mobile");

    navLinks.forEach((link) => {
      if (link instanceof HTMLAnchorElement) {
        const target = document.querySelector(link.hash);

        if (
          target != null &&
          target instanceof HTMLElement &&
          target.offsetTop - 100 <= pageYOffset &&
          target.offsetTop + target.offsetHeight - 100 > pageYOffset
        ) {
          link.classList.add("header-item-active");
        } else {
          link.classList.remove("header-item-active");
        }
      }
    });

    mobileNavLinks.forEach((link) => {
      if (link instanceof HTMLAnchorElement) {
        const target = document.querySelector(link.hash);

        if (
          target != null &&
          target instanceof HTMLElement &&
          target.offsetTop - 96 <= pageYOffset &&
          target.offsetTop + target.offsetHeight - 96 > pageYOffset
        ) {
          link.classList.add("bg-white");
        } else {
          link.classList.remove("bg-white");
        }
      }
    });
  }, []);

  const menuClick = useCallback(
    (event: any) => {
      const menu = document.querySelector("#app-menu");
      const nav = document.querySelector("#HeaderSection");

      menu?.classList.toggle("hidden");

      if (!headerActive) {
        nav?.classList.toggle("shadow-xl");
      }
    },
    [headerActive]
  );

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <div
        className={
          "flex items-center flex-wrap bg-primary-bg p-3 fixed w-full top-0 left-0 right-0 z-50 " +
          props.className
        }
        id="HeaderSection"
      >
        <Link href={"/"} className="inline-flex items-center p-2 mr-4 ">
          <Image
            src="/logo.png"
            alt="Logo"
            className="btn btn-square border-none btn-lg"
            width={64}
            height={64}
          />
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-white rounded lg:hidden text-primary ml-auto hover:text-primary outline-none"
          onClick={menuClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden lg:inline-flex lg:flex-grow lg:w-auto flex-row gap-10 text-lg text-primary font-semibold">
          <div className="inline-flex flex-row ml-auto w-auto items-center h-auto">
            {headerLinks.map((headerLink) => (
              <HeaderItem
                label={headerLink.label}
                link={headerLink.link}
                key={headerLink.label}
                className="header-item"
              />
            ))}
          </div>
        </div>
        <div className="hidden w-full lg:hidden" id="app-menu">
          <div className="w-full items-center  flex flex-col gap-2">
            {headerLinks.map((headerLink) => (
              <HeaderItem
                label={headerLink.label}
                link={headerLink.link}
                key={headerLink.label}
                className="hover:bg-white btn-block header-item-mobile"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
