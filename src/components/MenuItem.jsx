import Link from "next/link"

const MenuItem = ({title, path, Icon}) => {
  return (
    <Link href={path} className="hover:text-amber-700">
      <Icon className="text-2xl sm:hidden" />
      <p className="font-bold hidden sm:inline">{title}</p>
    </Link>
  )
}
export default MenuItem