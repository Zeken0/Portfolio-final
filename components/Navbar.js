import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Burger } from "@mantine/core";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [opened, setOpened] = useState(false);
  const [mobile, setMobile] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(function onFirstMount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={
        navbar ? styles.navbar_container_active : styles.navbar_container
      }
    >
      <div className={styles.navbar_content}>
        <Link href={"/"}>
          <Image
            src={"/../public/images/logo.jpg"}
            alt="logo"
            height={70}
            width={70}
          />
        </Link>
        <div className={styles.hamburger}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            color="#ffff"
          />
        </div>
        <div className={styles.navbar_menu}>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/#about_container"}>
              <li>About</li>
            </Link>
            <Link href={"/#work_container"}>
              <li>Work</li>
            </Link>
            <Link href={"/#contact_container"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className={styles.navbar_menu_mobile}>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/#about_container"}>
              <li>About</li>
            </Link>
            <Link href={"/#work_container"}>
              <li>Work</li>
            </Link>
            <Link href={"/#contact_container"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
