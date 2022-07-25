
import React from "react";
import SizedImage from "./sized-image"
export default function LandingImage({ url, size = [400, 467] }) {
  return (
    <SizedImage className="landingImage" url={url} size={size} />
  )
}
