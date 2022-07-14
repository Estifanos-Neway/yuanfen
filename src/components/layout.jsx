
import { useContextProvider } from "../context"
import { Retry } from "./";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { closeSidebar, openSidebar } from "../functions";
import {IoIosBowtie} from "react-icons/io" 


export default function Layout({ children, noFooter = false }) {
    const { socials } = useContextProvider();
    const instagramUrl = `https://www.instagram.com/${socials.instagram}`
    const facebookUrl = `https://www.facebook.com/${socials.faceook}`
    const telegramUrl = `https://t.me/${socials.telegram}`
    const emailUrl = `mailto:${socials.email}`
    try {
        return (
            <>
            <div style={{color:"#1a1a1a"}}> 
                <div className="fixed z-40 w-screen h-screen bg-black hidden duration-300 ease-normal md:hidden" id="sidebarBg" onClick={closeSidebar} ></div>
                <aside className="fixed z-50 w-0 md:w-20 h-full overflow-hidden bg-white border-r-gray-400 md:border-r duration-300 ease-normal py-5 "  style={{ "minHeight": "320px" }} id="sidebar">
                    <div className="h-full flex flex-col justify-between items-center">
                        <div className="">
                            <IoIosBowtie className="text-5xl text-black" />
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
                                    <a href={emailUrl}>
                                        <AiOutlinePhone className="sidebarIcon" />
                                    </a>
                                </li>

                            </ul>
                            <div className="w-full h-px bg-gray-500 rounded"></div>
                            <div>
                                <MdShoppingCart className="sidebarIcon" />
                            </div>
                        </div>
                        <div onClick={closeSidebar} className="md:invisible text-2xl">
                            <FaChevronLeft />
                        </div>
                    </div>
                </aside>
                <div className="fixed bottom-4 z-30 md:hidden bg-black bg-opacity-70 p-3 rounded-tr-2xl rounded-br-2xl" onClick={openSidebar}>
                    <FaChevronRight className="text-white text-xl" />
                </div>
                <main className="bg-gray-200b absolute md:left-20 right-0">
                    {children}
                    {noFooter ? <></> : <footer>
                        <a href={instagramUrl}>
                            <AiOutlineInstagram />
                        </a>
                        <a href={facebookUrl}>
                            <RiFacebookCircleLine />
                        </a>
                        <a href={telegramUrl}>
                            <TbBrandTelegram />
                        </a>
                        <a href={emailUrl}>
                            <HiOutlineMail />
                        </a>
                    </footer>}
                </main>
                </div>
            </>
        )
    } catch (error) {
        console.error("error");
        console.dir(error, { depth: null });
        return <Retry />
    }

}
