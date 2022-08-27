import React from "react"
import { Link } from "react-router-dom";
import { Layout, ProgressiveImage } from "../components";

export default function Test() {
  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <ProgressiveImage className="w-[150px] h-[200px]"/>
      </div>
    </Layout>
  )
}
