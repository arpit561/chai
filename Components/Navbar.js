"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const {data: session} = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <div>
      <nav className=" bg-slate-900 text-white flex justify-between items-center px-4 h-16">
        <div className="logo font-bold text-lg flex">
          <div className="bg-white p-[0.3px]">
            <img
              src="https://media1.tenor.com/m/XKdHvzVVZW8AAAAC/cup-of-tea-teapot.gif"
              width={33}
            />
          </div>
          <span>GetMeaChai</span>
        </div>
        {/* <ul className="flex justify-between gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Login</li>
          <li>Signup</li>
        </ul> */}

        <div>
          <Link href={"/login"}>
            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>

          <Link href={"/about"}>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              About
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
