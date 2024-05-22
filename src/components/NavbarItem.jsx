"use client";
import {Suspense} from "react";
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <Suspense>
      <Link href={`/?genre=${param}`} className={`hover:text-amber-700 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg' :''}`}>
          {title}
      </Link>
    </Suspense>
  )
}
export default NavbarItem