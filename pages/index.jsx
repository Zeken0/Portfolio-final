import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import { ChevronDown } from "tabler-icons-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Burger } from "@mantine/core";


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [section, setSectionActive] = useState(false);
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const home = useRef(null);
  const about = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 68,
    });
    console.log("offsetTop:", elementRef.current.offsetTop);
    console.log("offsetHeight:",elementRef.current.offsetHeight);
    if (elementRef.current.offsetTop === 0 && elementRef.current.offsetHeight <= 698 ) {
      setSectionActive(true)
    } else {
      setSectionActive(false)
    }

    if (elementRef.current.offsetTop === 698 && elementRef.current.offsetHeight <= 645 ) {
      setSectionActive(true)
    } else {
      setSectionActive(false)
    }

    if (elementRef.current.offsetTop === 1343 && elementRef.current.offsetHeight <= 1676 ) {
      setSectionActive(true)
    } else {
      setSectionActive(false)
    }

    if (elementRef.current.offsetTop === 3019 && elementRef.current.offsetHeight <= 1047 ) {
      setSectionActive(true)
    } else {
      setSectionActive(false)
    }

  
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(function onFirstMount() {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, "Must be higher than 2 characters")
        .max(20, "Must be shorter than 20 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .required("Email is required"),
      subject: Yup.string()
        .trim()
        .min(3, "Must be higher than 3 characters")
        .required("Subject is required"),
      message: Yup.string()
        .trim()
        .min(10, "Must be higher than 10 characters")
        .max(500, "We dont need a novel")
        .required("Message is required"),
    }),

    onSubmit: () => {
      alert(
        "youre message has been sendt! i will get back to you as soon as possible"
      );
      resetForm();
    },
  });

  return (
    <div className={styles.main_container}>
      <Head>
        <title>Ahmed J. Jibril | Frontend-developer</title>
        <meta
          name="description"
          content="This is a portfolio website for the Frontend developer Ahmed J. Jibril"
        />
      </Head>
      <nav
        className={
        navbar ? styles.navbar_container_active : styles.navbar_container}>
          
        <div className={styles.navbar_content}>
          <Link href={"/"}>
            <Image
              src={"https://ahmedjjibril.netlify.app/img/logo.jpg"}
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
          <div className={styles.hamburger}>
            <Burger
              opened={opened}
              onClick={() => {setOpened((o) => !o)}}
              title={title}
              color="#ffff"
            />
          </div>
          <div className={styles.navbar_menu}>
            <ul>
                <li  onClick={() => scrollToSection(home)}>Home</li>
                <li  onClick={() => scrollToSection(about)}>About</li>
                <li  onClick={() => scrollToSection(work)}>Work</li>
                <li  onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
          </div>
          <div className={opened ? styles.navbar_menu_mobile : styles.hide_Mobile}>
            <ul>
                <li onClick={() => scrollToSection(home)}>Home</li>
                <li onClick={() => scrollToSection(about)}>About</li>
                <li onClick={() => scrollToSection(work)}>Work</li>
                <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={styles.main_section}>
        <section ref={home} className={styles.home_container}>
          
          <div className={styles.home_content}>
            <div className={styles.top_section}>
              <div className={styles.left_content}>
                <div className={styles.greeting}>
                  <div className={styles.line}></div>
                  <span>HELLO THERE</span>
                </div>
                <h1>I am Ahmed J. Jibril</h1>
                <span>I am a Frontend Developer</span>
              </div>
              <div className={styles.right_content}>
                    <button onClick={() => scrollToSection(about)}>MORE ABOUT ME</button>
                    <button onClick={() => scrollToSection(work)}>LATEST PROJECTS</button>                
              </div>
            </div>
            <div className={styles.bottom_section}>
                  <span onClick={() => scrollToSection(about)}>
                    SCROLL DOWN <ChevronDown />
                  </span>
            </div>
          </div>
        </section>
        <section ref={about} className={styles.about_container}>
          <div className={styles.about_content}>
            <div className={styles.top_section}>
              <span>ABOUT</span>
              <h2>Personal Info.</h2>
              <h3>Get to know more about me</h3>
              <div className={styles.about_underline}></div>
            </div>
            <div className={styles.bottom_section}>
              <div className={styles.left_content}>
                <h4>Hello!</h4>
                <p>
                  My name is Ahmed Jamal Jibril and I´m a passionate Frontend
                  Developer using web technologies to build amazing products and
                  focusing on solving problems for different niches and
                  different industries using the power of technology. Would love
                  to hear from you. Whether it´s a project, job opportunity, or
                  just a chat. Feel free to contact me!
                </p>
              </div>
              <div className={styles.right_content}>
                <h4>Skills</h4>
                <div className={styles.skills_content}>
                  <div className={styles.skills_item}>HTML</div>
                  <div className={styles.skills_item}>CSS</div>
                  <div className={styles.skills_item}>JAVASCRIPT</div>
                  <div className={styles.skills_item}>TYPESCRIPT</div>
                  <div className={styles.skills_item}>REACT</div>
                  <div className={styles.skills_item}>NEXT.JS</div>
                  <div className={styles.skills_item}>SASS</div>
                  <div className={styles.skills_item}>RESPONSIVE DESIGN</div>
                  <div className={styles.skills_item}>ADOBE XD</div>
                  <div className={styles.skills_item}>FIGMA</div>
                  <div className={styles.skills_item}>BOOTSTRAP</div>
                  <div className={styles.skills_item}>GITHUB</div>
                  <div className={styles.skills_item}>NETLIFY</div>
                  <div className={styles.skills_item}>STRAPI</div>
                  <div className={styles.skills_item}>HEROKU</div>
                  <div className={styles.skills_item}>WORDPRESS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={work} className={styles.work_container}>
          <div className={styles.work_content}>
            <div className={styles.top_section}>
              <span>WORK</span>
              <h2>Latest Projects.</h2>
              <h3>
                Here you can find some of the projects that i have created
                recently
              </h3>
              <div className={styles.work_underline}></div>
            </div>
            <div className={styles.bottom_section}>
              <div className={styles.project_container}>
                <div className={styles.project_image}>
                  <Link href={"https://makers-studio.netlify.app/"} target="_blank">
                    <img
                      src="https://ahmedjjibril.netlify.app/img/makers-studio.JPG"
                      alt="Image of the High Art site"
                    />
                  </Link>
                </div>
                <div className={styles.project_info}>
                  <h4>Maker´s studio</h4>
                  <p>
                    Maker´s Studio is an e-commerce site where you can buy or
                    sell your own artwork on.
                  </p>
                  <div className={styles.skills_content}>
                    <div className={styles.skills_item}>HTML</div>
                    <div className={styles.skills_item}>CSS</div>
                    <div className={styles.skills_item}>JAVASCRIPT</div>
                    <div className={styles.skills_item}>FIGMA</div>
                    <div className={styles.skills_item}>ADOBE XD</div>
                    <div className={styles.skills_item}>BOOTSTRAP</div>
                    <div className={styles.skills_item}>NETLIFY</div>
                    <div className={styles.skills_item}>STRAPI</div>
                    <div className={styles.skills_item}>HEROKU</div>
                  </div>
                  <div className={styles.project_buttons}>
                    <Link href={""}>
                      <button>DESIGN</button>
                    </Link>
                    <Link href={"https://makers-studio.netlify.app/"} target="_blank">
                      <button>LIVE SITE</button>
                    </Link>
                    <Link href={"https://github.com/Zeken0/Makers-Studio"} target="_blank">
                      <button>CODE</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.project_container}>
                <div className={styles.project_image}>
                  <Link href={"https://high-art.netlify.app/"} target="_blank">
                    <img
                      src="https://ahmedjjibril.netlify.app/img/highart2.JPG"
                      alt="Image of the High Art site"
                    />
                  </Link>
                </div>
                <div className={styles.project_info}>
                  <h4>High Art</h4>
                  <p>
                    High Art is a blog site about the most influential music
                    albums of the 21st century.
                  </p>
                  <div className={styles.skills_content}>
                    <div className={styles.skills_item}>HTML</div>
                    <div className={styles.skills_item}>CSS</div>
                    <div className={styles.skills_item}>JAVASCRIPT</div>
                    <div className={styles.skills_item}>FIGMA</div>
                    <div className={styles.skills_item}>ADOBE XD</div>
                    <div className={styles.skills_item}>JQUERY</div>
                    <div className={styles.skills_item}>NETLIFY</div>
                    <div className={styles.skills_item}>STRAPI</div>
                    <div className={styles.skills_item}>HEROKU</div>
                  </div>
                  <div className={styles.project_buttons}>
                    <Link
                      href={
                        "https://xd.adobe.com/view/5bfb59d4-f438-46ee-997d-5722c7aa7068-0ea8/"
                      }
                      target="_blank"
                    >
                      <button>DESIGN</button>
                    </Link>
                    <Link href={"https://high-art.netlify.app/"} target="_blank">
                      <button>LIVE SITE</button>
                    </Link>
                    <Link href={"https://github.com/Zeken0/HighArt"} target="_blank">
                      <button>CODE</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.project_container}>
                <div className={styles.project_image}>
                  <Link href={"https://the-interactive-science-museum.netlify.app/"} target="_blank">
                    <img
                      src="https://ahmedjjibril.netlify.app/img/tism2.JPG"
                      alt="Image of the High Art site"
                    />
                  </Link>
                </div>
                <div className={styles.project_info}>
                  <h4>The Interactive Science Museum</h4>
                  <p>
                    The Interactive Science Museum is a informative museum site
                    with a mission to make science accessible to all.
                  </p>
                  <div className={styles.skills_content}>
                    <div className={styles.skills_item}>HTML</div>
                    <div className={styles.skills_item}>CSS</div>
                    <div className={styles.skills_item}>JAVASCRIPT</div>
                    <div className={styles.skills_item}>FIGMA</div>
                    <div className={styles.skills_item}>ADOBE XD</div>
                    <div className={styles.skills_item}>NETLIFY</div>
                  </div>
                  <div className={styles.project_buttons}>
                    <Link
                      href={
                        "https://xd.adobe.com/view/39045b06-2d8b-4833-9c3f-f265b6476211-6c57/screen/044d0ef7-5786-4b32-bdc5-16896607b15a/"
                      }
                      target="_blank"
                    >
                      <button>DESIGN</button>
                    </Link>
                    <Link
                      href={
                        "https://the-interactive-science-museum.netlify.app/"
                      }
                      target="_blank"
                    >
                      <button>LIVE SITE</button>
                    </Link>
                    <Link
                      href={
                        "https://github.com/Zeken0/The-Interactive-Science-Museum"
                      }
                      target="_blank"
                    >
                      <button>CODE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={contact} className={styles.contact_container}>
          <div className={styles.contact_content}>
            <div className={styles.top_section}>
              <span>CONTACT</span>
              <h2>Say Hello.</h2>
              <h3>
                Submit the form below so I can get back to you as soon as
                possible
              </h3>
            </div>
            <div className={styles.bottom_section}>
              <div className={styles.left_content}>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name ? (
                      <div className={styles.text_danger}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div className={styles.text_danger}>{errors.email}</div>
                    ) : null}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject ? (
                      <div className={styles.text_danger}>{errors.subject}</div>
                    ) : null}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message ? (
                      <div className={styles.text_danger}>{errors.message}</div>
                    ) : null}
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className={styles.right_content}>
                <div>
                  <h5>PHONE</h5>
                  <p>Mobile: (+47)99592853</p>
                </div>
                <div>
                  <h5>EMAIL</h5>
                  <p>Ahmed.J.Jibril@hotmail.com</p>
                </div>
                <div>
                  <h5>ADDRESS</h5>
                  <p>Asker, Norway</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
