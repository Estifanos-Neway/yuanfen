
import { useContextProvider } from "../context"
import { Retry } from "./";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandTelegram, TbHanger } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { closeSidebar, openSidebar } from "../functions";


export default function Layout({ children, noFooter = false }) {
    const { socials } = useContextProvider();
    const instagramUrl = `https://www.instagram.com/${socials.instagram}`
    const facebookUrl = `https://www.facebook.com/${socials.faceook}`
    const telegramUrl = `https://t.me/${socials.telegram}`
    const emailUrl = `mailto:${socials.email}`
    try {
        return (
            <>
            <div className="">
                <div className="fixed z-40 w-screen h-screen bg-black hidden duration-300 ease-normal sm:hidden" id="sidebarBg" onClick={closeSidebar} ></div>
                <aside className="fixed z-50 w-0 sm:w-20 h-full overflow-scroll overflow-x-hidden bg-white md:border-r-gray-300 md:border-r-2 duration-300 ease-normal py-5 " id="sidebar">
                    <div className="h-full flex flex-col justify-between items-center" style={{ "minHeight": "320px" }}>
                        <div>
                            <TbHanger className="text-4xl font-bold" />
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
                        <div onClick={closeSidebar} className="sm:invisible text-2xl">
                            <FaChevronLeft />
                        </div>
                    </div>
                </aside>
                <div className="fixed bottom-4 z-30 sm:hidden bg-black bg-opacity-70 p-3 rounded-tr-2xl rounded-br-2xl" onClick={openSidebar}>
                    <FaChevronRight className="text-white text-xl" />
                </div>
                <main className="bg-gray-200 absolute sm:left-20 right-0">
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
