
import React, { useState } from "react";
import { useMainContext } from "../contexts";
import Retry from "./retry";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { IoIosBowtie } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import { useOrder } from "../hooks";
import OrderForm from "./order-form";
import { Icon } from "@iconify/react";

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarBg = document.getElementById("sidebarBg");
    sidebar?.classList.replace("w-24", "w-0");
    sidebarBg?.classList.replace("bg-opacity-50", "hidden");
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarBg = document.getElementById("sidebarBg");
    sidebarBg?.classList.remove("hidden");
    sidebarBg?.classList.add("bg-opacity-0")
    setTimeout(() => {
        sidebarBg?.classList.replace("bg-opacity-0", "bg-opacity-50");
    }, 0);
    sidebar?.classList.replace("w-0", "w-24");
}

function showPhoneCon() {
    const phoneCon = document.getElementById("phoneCon");
    phoneCon?.classList.toggle("hidden");
}

function hidePhoneCon() {
    const phoneCon = document.getElementById("phoneCon");
    phoneCon?.classList.add("hidden");
}

export default function Layout({ children, noFooterOrder = false }) {
    // TODO: useEffect
    const { socials } = useMainContext();
    const instagramUrl = `https://www.instagram.com/${socials.instagram}`;
    const facebookUrl = `https://www.facebook.com/${socials.faceook}`;
    const telegramUrl = `https://t.me/${socials.telegram}`;
    const emailUrl = `mailto:${socials.email}`;

    try {
        return <>
            <div className="font-main text-gray-900">
                <div className="fixed z-[60] w-full flex justify-center bottom-7">
                    <div id="phoneCon" className="hidden flex items-center px-4 py-2  text-gray-500 primaryGradientBg rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="animate-pulse inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-gray-900 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                            <AiOutlinePhone className="text-2xl" />
                        </div>
                        <a href="tel:0987654321" className="text-lg text-gray-300 font-normal ml-2 mr-6 md:ml-4 md:mr-20">098765420</a>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5  text-gray-500 hover:text-white rounded-lg focus:text-white  p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={e => hidePhoneCon()}>
                            <span className="sr-only">Close</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="fixed z-40 w-screen h-screen bg-black hidden duration-300 ease-normal md:hidden" id="sidebarBg" onClick={closeSidebar} ></div>
                <aside className="fixed z-50 w-0 md:w-20 h-full overflow-hidden bg-white md:border-r-2 duration-300 ease-normal py-5 md:pb-10" style={{ "minHeight": "320px" }} id="sidebar">
                    <div className="h-full flex flex-col justify-between items-center gap-3">
                        <div className="flex flex-col items-center gap-2">
                            <HashLink smooth to="/#hero">
                                <IoIosBowtie className="text-5xl text-black" />
                            </HashLink>
                            <div className="flex flex-col items-center gap-7">
                                <div className="w-full h-2 primaryGradientBg rounded"></div>
                                <ul className="flex flex-col gap-7">
                                    <li>
                                        <a href={instagramUrl}>
                                            <AiOutlineInstagram className="sidebarIcon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={facebookUrl}>
                                            <RiFacebookCircleLine className="sidebarIcon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={telegramUrl}>
                                            <TbBrandTelegram className="sidebarIcon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={emailUrl}>
                                            <HiOutlineMail className="sidebarIcon" />
                                        </a>
                                    </li>
                                    <li>
                                        <AiOutlinePhone className="sidebarIcon cursor-pointer" onClick={e => showPhoneCon()} />
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <HashLink smooth to="#footerOrder" className="hidden md:block button">
                            <MdShoppingCart className="@apply text-2xl md:text-xl " />
                        </HashLink>
                        <div onClick={closeSidebar} className="md:hidden text-2xl button">
                            <FaChevronLeft />
                        </div>
                    </div>
                </aside>
                <div className="fixed bottom-4 z-30 md:hidden primaryGradientBg bg-opacity-70 p-3 rounded-tr-2xl rounded-br-2xl" onClick={openSidebar}>
                    <FaChevronRight className="text-white text-xl" />
                </div>
                <main className="bg-gray-100b absolute w-screen md:w-auto min-w-[300px]  md:left-20 right-0 overflow-x-hidden">
                    <div className="min-h-screen">
                        {children}
                    </div>
                    {
                        <footer className="bg-gray-200 mt-10 flex flex-col items-center px-0 gap-16" >
                            {
                                noFooterOrder ?
                                    <></> :
                                    <div className="flex flex-col items-center gap-2 pt-3" id="footerOrder">
                                        <p className="text-2xl">Order Here</p>
                                        <OrderForm />
                                    </div>
                            }
                            <div className="flex flex-col items-center w-full bg-gray-300 py-3">
                                <div>
                                    <p className="text-xl">follow and contact us</p>
                                </div>
                                <div className="flex justify-center gap-8 sm:gap-16 mt-5 mb-11">
                                    <div className="footerIconCon">
                                        <a href={instagramUrl}>
                                            <AiOutlineInstagram className="footerIcon" />
                                        </a>
                                    </div>
                                    <div className="footerIconCon">
                                        <a href={facebookUrl}>
                                            <RiFacebookCircleLine className="footerIcon" />
                                        </a>
                                    </div>
                                    <div className="footerIconCon">
                                        <a href={telegramUrl}>
                                            <TbBrandTelegram className="footerIcon" />
                                        </a>
                                    </div>
                                    <div className="footerIconCon">
                                        <a href={emailUrl}>
                                            <HiOutlineMail className="footerIcon" />
                                        </a>
                                    </div>
                                    <div className="footerIconCon">
                                        <AiOutlinePhone className="footerIcon" />
                                    </div>
                                </div>
                                <p className="text-xs">
                                    &copy;
                                    {new Date().getFullYear() + " "}
                                    <HashLink smooth to="/#hero">
                                        <b>Yuanfen Fashion Designs</b>
                                    </HashLink>.
                                    All rights reserved!
                                </p>
                            </div>
                        </footer>
                    }
                </main>
            </div>
        </>
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
