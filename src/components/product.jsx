import React from "react"
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SizedImage from "./sized-image"

export default function Product({ _id, price, imageUrl, finalInList = false }) {

    return (
        <div>

            <div className="relative rounded-lg overflow-hidden w-[187.5px] h-[250px] shadow-xl">
                {finalInList ?
                    <div className="w-full h-full flex justify-center items-center primaryGradientBg">
                        <HashLink smooth to="#footerOrder">
                            <div className="rounded px-3 py-1 text-xs primaryGradientBgLight">
                                Order now
                            </div>
                        </HashLink>
                    </div>
                    :
                    <Link to={`/products/${_id}`}>
                        <SizedImage className="absolute w-full h-full" url={imageUrl} />
                        <div className="absolute w-full h-full flex flex-col justify-end pl-2 pb-2 bg-gradient-to-t from-black via-transparent gap-1">
                            <p className="text-white text-xs">
                                &nbsp;
                                {
                                    price ? <>{price} <span className="font-semibold">birr</span></> : <span className="font-bold"> - - -</span>
                                }
                            </p>
                            <Link to={`/order/${_id}`} className="bg-white rounded-lg px-3 py-1 flex gap-2 w-fit items-center text-xs">
                                <MdShoppingCart />
                                <p>Order this</p>
                            </Link>
                        </div>
                    </Link>
                }
            </div>


        </div>
    )
}
