import Link from "next/link";
import MenuItem from "./MenuItem"
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 max-w-6xl mx-auto">
        <div className="flex gap-4">
            <MenuItem title="Home" path="/" Icon={AiFillHome} />
            <MenuItem title="About" path="/about" Icon={BsInfoCircleFill} />
        </div>
        <Link href={"/"} className="flex items-center gap-1">
            <p className="bg-amber-500 font-bold p-2 rounded-lg text-white">IMDb</p>
            <span className="text-sm hidden sm:inline">Clone</span>
        </Link>
    </div>
  )
}
export default Header