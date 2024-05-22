"use client"

import { useEffect } from "react"

const Error = ({error, reset}) => {
    useEffect(() => {
        console.log(error);
    },[error]);

  return (
    <div className="text-center mt-16">
        <h1>Something went wrong. Please try after some time.</h1>
        <button onClick={() => reset()} className="mt-2 bg-amber-500 text-white rounded-md px-2 py-2 h-10 font-bold hover:bg-amber-700 transition-colors duration-300 disabled:bg-gray-400">Try Again</button>
    </div>
  )
}
export default Error