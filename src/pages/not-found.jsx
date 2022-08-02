import React from "react"
import { Link } from "react-router-dom";
import { Layout } from "../components";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-6 text-center max-w-[600px] md:max-w-[700px]">
          <p className="text-[80px] md:text-[100px] lg:text-[120px] font-bold">
            PAGE NOT FOUND
          </p>
          <p className="mb-3 text-xl md:text-2xl">
            Sorry, the page you requested is not found.
          </p>
          <Link to="/" className="w-full">
            <div className="button">
              Go home?
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
