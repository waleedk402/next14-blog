"use client"
import Link from 'next/link'
import React from 'react'
import classes from './links.module.css'
import NavLink from './navLink'
const Links = () => {
    const links=[{
        title:"Homepage",
        path:"/"
    },
{
    title:"About",
    path:"/about"
},
{
    title:"Contact",
    path:"/contact",
}
,{
    title:"Blog",
    path:"/blog"}]

   const session=true;
   const admin=true;
  return (
    <div className={classes.links}>
        {links.map((link)=>{
           return(<NavLink item={link} key={link.title}/>)
        })}
        {session ?(<> <NavLink item={{title:"Admin",path:"/admin"}}/>
        <button className={classes.logout}>Logout</button>
        </>):(<NavLink item={{title:"Login",path:"/login"}}></NavLink>)}
        {}
    </div>
  )
}

export default Links