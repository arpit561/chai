"use client";

import { useRef } from "react";

export default function Home() {

  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center text-white h-[44vh]">
        <div className=" font-bold text-5xl flex gap-2 justify-center items-center">
          Buy me a chai
          <span width={88} className=" border border-r-2">
            <iframe
              src="https://giphy.com/embed/ge2ckPYYtHJX5mdgiY"
              width="50"
              height="50"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button
            type="button"
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
          focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start now
          </button>

          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l
             hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium
              rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>
      <div className=" bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto py-32 pt-14">
        <h2 className=" text-3xl font-bold text-center mb-14">
          Chai lover can buy a chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item flex flex-col justify-center item-center space-y-3">
            <img
              className=" border border-slate-400 rounded-full p-[0.7%] text-black"
              width={88}
              src="https://media1.tenor.com/m/Trqn0AC_d98AAAAC/document-email.gif"
            />
            <p className=" font-bold">Fans want to help</p>
            <p className=" text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item flex flex-col justify-center items-center space-y-3">
            <img
              className=" border border-slate-400 rounded-full p-[0.7%] text-black"
              width={88}
              src="https://media1.tenor.com/m/frmbUwndO6QAAAAd/tribal-trap-tribal-coin.gif"
            />
            <p className=" font-bold">Fans want to help</p>
            <p className=" text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item flex flex-col justify-center items-center space-y-3">
            <img
              className=" border border-slate-400 rounded-full p-[0.7] text-black"
              width={88}
              src="https://media.tenor.com/nk3W7eM9vMwAAAAi/teamwork-posing.gif"
            />
            <p className=" font-bold">Fans want to help</p>
            <p className=" text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto py-32 pt-14">
        <h2 className=" text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <div className="flex gap-5 justify-around">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Kv1vQyrEOyA?si=1rc94QK0Y18sGW-r"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
