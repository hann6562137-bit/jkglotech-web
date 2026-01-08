"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { TopBarMenuItem } from "./navData";

import { topBarItems } from "./navData";
import { useEffect, useRef, useState } from "react";
import LanguageButton from "@/ui/LanguageButton";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

function TopBarButtons({ items }: { items: TopBarMenuItem[] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations('menu');

  useEffect(() => {
    const heights = menuRefs.current
      .map(el => el?.offsetHeight ?? 0);

    const max = Math.max(...heights);
    console.log("Max submenu height:", max);
    console.log("All submenu heights:", heights);

    setBackgroundHeight(max);
  }, [items]);

  console.log(backgroundHeight);
  return (
    <div className="w-full h-full flex flex-row relative font-aldrich text-white text-[20px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {items.map((item, index) => (
          <div
            key={item.nameKey}
            className="relative inline-block h-full group"
          >
            <div
              className="flex items-center justify-center h-full px-4 me-6 cursor-pointer"
            >
              {t(item.nameKey)}
              <Image
                src="/assets/topbar/down.svg"
                alt="Down Arrow"
                width={16}
                height={16}
                className="ms-3"
              />
              <div
                className={`absolute top-full left-0 w-full flex flex-col invisible group-hover:visible py-7`}
                ref={(el) => { menuRefs.current[index] = el }}
              >
                {
                  item.subMenu?.map((subItem) => (
                    <Link
                      key={subItem.nameKey}
                      href={subItem.link}
                      className="block px-4 py-1 whitespace-nowrap text-white text-aldrich text-[25px] cursor-pointer"
                    >
                      <div className="flex flex-row items-center">
                        {subItem.icon && (
                          <Image
                            src={subItem.icon}
                            alt={t(subItem.nameKey)}
                            width={49}
                            height={49}
                            className="inline-block me-5"
                          />
                        )}
                        {t(subItem.nameKey)}
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 서브 메뉴 배경(호버) */}
      <div
        className={`fixed top-[100px] left-0 -z-10 w-screen bg-black ${isHovered ? 'flex' : 'hidden'}`}
        style={{ height: backgroundHeight }}>
      </div>
    </div>
  );
}

export default function TopBar({ pathname }: { pathname: string }) {
  const t = useTranslations('menu');

  return (
    <div>
      <MobileTopBar pathname={pathname} />
      <nav
        key={pathname}
        className="hidden xl:block fixed top-0 left-0 right-0 z-50 w-screen h-[100px] antialiased bg-black/50 backdrop-blur-md">
        <div className="content-container h-full">
          <div className="mx-5 flex flex-row items-center justify-start h-full border-b border-[#404040] font-aldrich">
            <Link
              href="/"
              className="flex items-center justify-center w-[250px] h-full cursor-pointer">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={600}
                height={200}
                className="w-full h-auto object-contain"
              />
            </Link>
            <div className="ms-auto h-full me-10">
              <TopBarButtons items={topBarItems} />
            </div>
            <div className="h-full flex items-center justify-center">
              <Link
                href="/about-us"
                className="px-4 py-2 block items-center justify-center bg-[#FFD900] text-black cursor-pointer">
                {t('about-us')}
              </Link>
            </div>
            <div>
              <LanguageButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function MobileTopBar({ pathname }: { pathname: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav
      key={pathname}
      className="flex xl:hidden fixed top-0 left-0 right-0 z-50 w-screen h-[50px] antialiased bg-black/50 backdrop-blur-md px-5 border-b border-[#404040]">
      <div className="w-full flex flex-row">
        <Link
          href="/"
          className="flex items-center justify-center h-full cursor-pointer py-4">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={600}
            height={200}
            className="h-full w-auto object-contain"
          />
        </Link>
      </div>
      <button className="ms-auto flex items-center justify-center text-[25px] cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>
      {
        isMenuOpen && <MobileTopBarMenu />
      }
    </nav>
  );
}

function MobileTopBarMenu() {
  return (
    <nav className="fixed bg-black h-[calc(100svh-50px)] w-full top-[50px] left-0 z-40 overflow-y-scroll">
      <div className="flex flex-col w-full">
        {topBarItems.map((item) => (
          <MobileTopBarMenuItem key={item.nameKey} item={item} />
        ))}
      </div>
    </nav>
  );
}

function MobileTopBarMenuItem({ item }: { item: TopBarMenuItem }) {
  const t = useTranslations('menu');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsSubMenuOpen(!isSubMenuOpen);
        }}
        className="flex text-white font-aldrich text-[20px] cursor-pointer w-full flex-row items-center border-b border-[#404040] px-5"
      >
        <span className="pt-2 pb-3">{t(item.nameKey)}</span>
        {item.subMenu && isSubMenuOpen && (
          <div
            className="ms-auto inline-block"
          >
            <GoChevronUp size={20} />
          </div>
        )}
        {item.subMenu && !isSubMenuOpen && (
          <div
            className="ms-auto inline-block"
          >
            <GoChevronDown size={20} />
          </div>
        )}
      </button>
      {isSubMenuOpen && item.subMenu && 
        <div className="flex flex-col w-full px-5 py-2 border-b border-[#404040]">
          {item.subMenu.map((subItem) => (
            <MobileTopBarSubMenuItem key={subItem.nameKey} subItem={subItem} />
          ))}
        </div>
      }
    </div>
  );
}

function MobileTopBarSubMenuItem({ subItem }: { subItem: TopBarMenuItem }) {
  const t = useTranslations('menu');
  return (
    <a
      href={subItem.link}
      className="flex py-2 text-white font-aldrich text-[18px] cursor-pointer items-center"
    >
      {subItem.icon && (
        <Image
          src={subItem.icon}
          alt={t(subItem.nameKey)}
          width={30}
          height={30}
          className="inline-block me-3"
        />
      )}
      <div className="text-[20px] flex items-center">{t(subItem.nameKey)}</div>
    </a>
  );
}