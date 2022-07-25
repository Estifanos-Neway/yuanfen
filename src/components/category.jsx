import React from "react";
import { Retry } from "./";

export default function Category({ name, imageUrl }) {
  try {
    return (
      <div className="flex flex-col items-center gap-2 w-16">
        <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={imageUrl} alt={name} />
        <p className="text-xs">
          {name}
        </p>
      </div>
    )
  } catch (error) {
    console.error("error");
    console.dir(error, { depth: null });
    return <Retry />
  }

}
