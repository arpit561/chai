import React from "react";

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold my-10">About Us</h1>
      <div>
        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://rootwoot.com/wp-content/uploads/2021/09/kullad4-540x540.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              GetMeAChai -- 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>

        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 
          focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg 
          dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-[66vh] mt-5"
        >
          <a href="https://kolkatachai.co/pages/about-chai">Read more</a>
        </button>
      </div>
    </div>
  );
};

export default about;
