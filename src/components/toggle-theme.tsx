'use client'

import React, { useEffect, useState } from 'react';


const ToggleTheme = () => {
  const localStorageKey = "is_dark_mode";
  const [isDarkmode, setIsDarkmode] = useState(localStorage.getItem(localStorageKey) == "true");

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  function handleToggle() {
    localStorage.setItem(localStorageKey, String(!isDarkmode))
    setIsDarkmode(!isDarkmode)
  }

  useEffect(() => {
    !isDarkmode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
  }, [isDarkmode])

  return (
    <button
      className="rounded-full w-10 bg-white dark:bg-zinc-700 flex items-center transition duration-300 focus:outline-none shadow"
      onClick={handleToggle}
    >
      <div
        className={(isDarkmode ? '-translate-x-2 bg-gradient-to-r from-zinc-700 to-violet-800 ' : 'bg-gradient-to-r from-rose-400 to-violet-600 translate-x-full ') + "w-6 h-6 relative rounded-full transition duration-500 transform  -translate-x-2 p-1 text-white"}
      >
        {!isDarkmode ? lightIcon : darkIcon}
      </div>
    </button>
  );
};

export default ToggleTheme;
