"use client"
import Link from 'next/link'
import classes from "./navLink.module.css"
import { usePathname } from 'next/navigation'
const NavLink = ({item}) => {
const pathName=usePathname()
console.log(pathName)
  return (
   <Link href={item.path} className={`${classes.container} ${pathName===item.path && classes.active}`}>{item.title}</Link>
  )
}

export default NavLink