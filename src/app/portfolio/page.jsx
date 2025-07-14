"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Trello Clone (Drei Board)",
    desc: "This is a Kanban-style task management application inspired by Trello, built using Next.js. The app allows users to create boards, lists, and cards to visually manage tasks and projects. It features a clean drag-and-drop interface, real-time updates.",
    img: "/Drei Board.jpg",
    link: "/contact",
    h3: "Tech Stack:",
    tech: "Next.js, Typescript, TailwindCss, Prisma ORM, PostgreSQL, Clerk, Shadcn, Drag & Drop Library"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "G-Drive Clone (Drei Drive)",
    desc: "A cloud-based file storage and management app inspired by Google Drive, developed using Next.js. This project allows users to upload, organize, and manage their files in a secure and intuitive interface. It mimics core Google Drive functionalities, including file uploads, file previews, and manage file.",
    img: "/Drei Drive.jpg",
    link: "https://drei-drive.vercel.app",
    h3: "Tech Stack:",
    tech: "Next.js, Typescript, TailwindCss, Appwrite, Shadcn, Drag & Drop Library (for Upload)"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "ChatGPT AI Clone (Drei AI)",
    desc: "An AI-powered chat application inspired by ChatGPT, built using React and Vite for blazing-fast performance and modern development experience. This project allows users to have real-time, conversational interactions with an AI assistant powered by Google Gemini API.",
    img: "/Drei AI.jpg",
    link: "/contact",
    h3: "Tech Stack:",
    tech: "React, Vite, TailwindCss, Typescript, mongoDB, Clerk(for Auth), Google Gemini API(for chat response), LocalStorage or IndexedDB (to store chat history locally)"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Simple Realtime Chat App",
    desc: "A lightweight web-based chat application that allows users to send and receive messages in real time. Built using core web technologies without any modern frontend frameworks, this project demonstrates real-time interaction using AJAX polling, with messages stored in a MySQL database.",
    img: "/Mensahero.jpg",
    link: "https://mensahero.42web.io",
    h3: "Tech Stack:",
    tech: "PHP (Backend logic), MySQL (Database), AJAX + JavaScript (Real-time messaging without page reload), HTML/CSS (Frontend structure and styling)"
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Ecommerce Website",
    desc: "A dynamic online store for selling custom t-shirts, developed using Laravel with Livewire for interactive components and Jetstream for user authentication. The app features a clean product catalog, shopping cart, and secure checkout system - all managed with a modern Laravel stack.",
    img: "/Ecommerce.jpg",
    link: "/contact",
    h3: "Tech Stack:",
    tech: "Laravel (Backend framework), MySQL (Relational database), Jetstream (Auth system with roles, sessions), Blade Templates + Tailwind CSS (Frontend UI)"
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill className="object-contain"/>
                    </div>
                    <div className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] md:pl-2">
                      <p>{item.desc}</p>
                      <hr className="my-2"/>
                      <h3>{item.h3}</h3>
                      <p>{item.tech}</p>
                    </div>
                  </div>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                  {item.id === 1 || item.id === 3 || item.id === 5?(
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg transition bg-white hover:bg-black hover:text-white text-gray-600 font-semibold m-4 rounded">Contact me</button>
                    
                  ):(
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg transition bg-white hover:bg-black hover:text-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  )}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Click the button if you are Interested!
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
