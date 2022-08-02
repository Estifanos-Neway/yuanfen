
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
                <div className="fixed z-40 w-screen h-screen bg-black hidden duration-300 ease-normal md:hidden" id="sidebarBg" onClick={closeSidebar} ></div>
                <aside className="fixed z-50 w-0 md:w-20 h-full overflow-hidden bg-white md:border-r duration-300 ease-normal py-5" style={{ "minHeight": "320px" }} id="sidebar">
                    <div className="h-full flex flex-col justify-between items-center">
                        <div className="">
                            <HashLink smooth to="/#hero">
                                <IoIosBowtie className="text-5xl text-black" />
                            </HashLink>
                        </div>
                        <div className="flex flex-col items-center">
                            <ul>
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
                                    <AiOutlinePhone className="sidebarIcon" />
                                </li>
                            </ul>
                            <div className="w-full h-px bg-gray-500 rounded"></div>
                            <div>
                                <HashLink smooth to="#footerOrder">
                                    <MdShoppingCart className="sidebarIcon" />
                                </HashLink>
                            </div>
                        </div>
                        <div onClick={closeSidebar} className="md:invisible text-2xl">
                            <FaChevronLeft />
                        </div>
                    </div>
                </aside>
                <div className="fixed bottom-4 z-30 md:hidden primaryGradientBg bg-opacity-70 p-3 rounded-tr-2xl rounded-br-2xl" onClick={openSidebar}>
                    <FaChevronRight className="text-white text-xl" />
                </div>
                <main className="bg-gray-200b absolute w-screen md:w-auto min-w-[300px]  md:left-20 right-0 overflow-x-hidden">
                    {children}
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
                                    {new Date().getFullYear()}
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
