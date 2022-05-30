import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <main>
        <Link href={"/"}>
          <Image
            src={"/../public/images/logo.jpg"}
            alt={"this is an image of the logo of the site"}
            height={170}
            width={170}
          />
        </Link>
        <div className={styles.contacts}>
          <Link href={"https://github.com/Zeken0"}>
            <span>GITHUB</span>
          </Link>
          <div className={styles.lineBreak}></div>
          <Link href={"https://www.linkedin.com/in/ahmed-jibril-242614215/"}>
            <span>LINKEDIN</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
