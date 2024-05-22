import { Suspense } from "react"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <Suspense>
      <div className="flex lg:text-lg dark:bg-gray-600 bg-amber-100 p-4 font-medium gap-8 justify-center ">
          <NavbarItem title="Trending" param="fetchTrending" />
          <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  )
}
export default Navbar