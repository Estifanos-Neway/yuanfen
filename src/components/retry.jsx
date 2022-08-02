import React from "react";
import { Link } from "react-router-dom";
export default function Retry() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-6 text-center max-w-[600px] md:max-w-[700px]">
        <p className="text-[80px] md:text-[100px] lg:text-[120px] font-bold">
          OOPS!
        </p>
        <p className="mb-3 text-xl md:text-2xl">
          Sorry, it seems like somethings went wrong!
        </p>
        <div className="button w-full" onClick={event => window.location.reload()}>
          Reload
        </div>
      </div>
    </div>
  )
}
