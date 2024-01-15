"use client";
import Link from "next/link";
import React, { useState } from "react";
import classes from "./links.module.css";
import NavLink from "./navLink";
import Image from "next/image";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const admin = true;
  return (
 
      <div className={classes.container}>
      <div className={classes.links}>
        {links.map((link) => {
          return <NavLink item={link} key={link.title} />;
        })}
        {session ? (
          <>
            {" "}
            <NavLink item={{ title: "Admin", path: "/admin" }} />
            <button className={classes.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        )}
      </div>
      <Image src="/menu.png" alt="" width={30} height={30} className={classes.menuButton} onClick={() => setOpen((prev) => !prev)}/>
      {open && (
        <div className={classes.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
      ))}
        </div>
      )}
      </div>
    
  );
};

export default Links;
