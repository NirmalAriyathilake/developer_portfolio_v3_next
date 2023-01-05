import { useCallback, useEffect } from "react";
import Image from "next/image";

import HeaderItem from "../components/header_item";

type Props = {
  className?: string | undefined;
};

const HeaderSection = (props: Props) => {
  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;

    const nav = document.querySelector("#HeaderSection");

    if (pageYOffset > 0) {
      nav?.classList.add("shadow-xl");
    } else {
      nav?.classList.remove("shadow-xl");
    }

    const navLinks = document.querySelectorAll(".header-item");
    
    navLinks.forEach((link) => {
      if (link instanceof HTMLAnchorElement) {
        const target = document.querySelector(link.hash);

        if (
          target != null &&
          target instanceof HTMLElement &&
          target.offsetTop - 96 <= pageYOffset &&
          target.offsetTop + target.offsetHeight - 96 > pageYOffset
        ) {
          link.classList.add("header-item-active");
        } else {
          link.classList.remove("header-item-active");
        }
      }
    });
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div
      className={
        "flex flex-row justify-between bg-primary-bg py-5 px-5 items-center fixed w-full top-0 left-0 right-0 z-50 " +
        props.className
      }
      id="HeaderSection"
    >
      <Image
        src="/logo.png"
        alt="Logo"
        className="ml-20"
        width={64}
        height={64}
      />
      <div className="flex flex-row gap-10 text-lg text-primary font-semibold">
        <HeaderItem label="About" link="#about" />
        <HeaderItem label="My services" link="#services" />
        <HeaderItem label="My projects" link="#projects" />
        <HeaderItem label="Contact me" link="#contact" />
      </div>
    </div>
  );
};

export default HeaderSection;
