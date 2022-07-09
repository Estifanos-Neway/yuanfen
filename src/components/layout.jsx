
import { useEffect, useState } from "react";
import sanityClient from "../configs/sanity-client.js";
import { useContextProvider } from "../context"

const othersQuery = "*[_type == 'other']{instagram, facebook, telegram, email}"

export default function Layout({ children, noFooter = false }) {
    const { socials } = useContextProvider();

    return (
        <>
            <header>
                <b>-----------Side Bar-----------</b>
                <p>{socials.instagram}</p>
                <p>{socials.facebook}</p>
                <p>{socials.telegram}</p>
                <p>{socials.email}</p>
            </header>

            <main>
                {children}
            </main>

            {noFooter ? <></> : <footer>
                <b>-----------Footer-----------</b>
                <p>{socials.instagram}</p>
                <p>{socials.facebook}</p>
                <p>{socials.telegram}</p>
                <p>{socials.email}</p>
            </footer>}
        </>

    )
}
