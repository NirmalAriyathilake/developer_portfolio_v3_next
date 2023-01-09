import { useCallback, useEffect, useState } from "react";
import Image from "next/future/image";
import { useTheme } from "next-themes";

import { AppLink, HeaderItem } from "../components";
import { DownloadedAsset, HeaderItemData } from "../data/models";

type Props = {
  headerLinks: HeaderItemData[];
  downloadedAssets: Map<String, DownloadedAsset>;
  className?: string | undefined;
};

const HeaderSection = (props: Props) => {
  const [headerActive, setHeaderActive] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          target.offsetTop - 100 <= pageYOffset &&
          target.offsetTop + target.offsetHeight - 100 > pageYOffset
        ) {
          link.classList.add("bg-white");
        } else {
          link.classList.remove("bg-white");
        }
      }
    });
  }, []);

  const menuClick = () => {
    const menu = document.querySelector("#app-menu");
    const nav = document.querySelector("#HeaderSection");

    menu?.classList.toggle("hidden");

    if (!headerActive) {
      nav?.classList.toggle("shadow-xl");
    }
  };

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const ThemedLogo = () => {
    if (!mounted) return null;
    let src;

    const currentTheme = theme === "system" ? systemTheme : theme;

    switch (currentTheme) {
      case "dark":
        src = "logoDark";
        break;
      case "light":
      default:
        src = "logo";
        break;
    }

    return (
      <Image
        {...props.downloadedAssets.get(src)?.image}
        className="btn btn-square border-none btn-lg"
        width={64}
        height={64}
        alt="Logo"
      />
    );
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
      return (
        <button
          className="inline-flex p-3 rounded text-primary outline-none ml-auto mr-5 btn btn-square btn-link  "
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="inline-flex p-3 rounded text-primary outline-none ml-auto mr-5 btn btn-square btn-link "
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <>
      <div
        className={`flex items-center flex-wrap bg-base-300 p-3 fixed w-full top-0 left-0 right-0 z-50 ${props.className}`}
        id="HeaderSection"
      >
        <AppLink href={"/"} className="inline-flex items-center p-2 mr-4 ">
          {ThemedLogo()}
        </AppLink>

        {props.headerLinks.length > 0 ? (
          <div className="hidden lg:inline-flex lg:flex-grow lg:w-auto flex-row gap-10 text-lg text-primary font-semibold">
            <div className="inline-flex flex-row ml-auto w-auto items-center h-auto">
              {props.headerLinks.map((headerLink) => (
                <HeaderItem
                  label={headerLink.label}
                  link={headerLink.link}
                  key={headerLink.label}
                  className="header-item"
                />
              ))}
            </div>
          </div>
        ) : null}
        <div className="inline-flex ml-auto">
          {renderThemeChanger()}
          {props.headerLinks.length > 0 ? (
            <button
              className="p-3 rounded lg:hidden text-primary hover:text-primary outline-none hover:ring-2 ring-primary "
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
          ) : null}
        </div>
        {props.headerLinks.length > 0 ? (
          <div className="hidden w-full lg:hidden" id="app-menu">
            <div className="w-full items-center  flex flex-col gap-2">
              {props.headerLinks.map((headerLink) => (
                <HeaderItem
                  label={headerLink.label}
                  link={headerLink.link}
                  key={headerLink.label}
                  className="hover:bg-white btn-block header-item-mobile"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default HeaderSection;
