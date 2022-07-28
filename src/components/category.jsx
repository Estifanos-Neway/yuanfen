import React from "react";
import { HashLink } from "react-router-hash-link";
import { Retry } from "./";

export default function Category({ name, imageUrl }) {
  try {
    return (
      <HashLink smooth to={`#${name}`}>
        <div className="flex flex-col items-center gap-2 w-16">
          <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={imageUrl} alt={name} />
          <p className="text-xs text-center">
            {name}
          </p>
        </div>
      </HashLink>
    )
  } catch (error) {
    console.error("error");
    console.dir(error, { depth: null });
    return <Retry />
  }

}
