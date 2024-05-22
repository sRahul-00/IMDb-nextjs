"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
    }
  return (
    <form className="flex justify-between max-w-6xl mx-auto px-5 items-center" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Search Any Keywords..."
        className="w-full h-14 bg-transparent placeholder-gray-500 outline-none rounded-md mr-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <button disabled={!search}  className="bg-amber-500 text-white rounded-md px-2 py-2 h-10 font-bold hover:bg-amber-700 transition-colors duration-300 disabled:bg-gray-400">Search</button>
    </form>
  )
}
export default SearchBox