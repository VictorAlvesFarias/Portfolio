"use client"

import { useEffect, useState } from 'react'
import React from 'react';
import Container from './Container';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import Locale from '@/components/Locale';
import Dictionaries from '../dictionaries/navbar.json'
import useClientInter from '@/utils/hooks/useClientInter';
import Anch from './Anch';
import type { Languages } from '../i18n.config';
import Gradientline from './Gradientline';
import ToggleTheme from './ToggleTheme';

function Navbar() {

  const [navStyle, setNavStyle] = useState(false);

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  const [mobileMenuLanguage, setMobileMenuLanguage] = useState(false)

  useEffect(() => {
    const handleScroll:any = () => {
      if (window.scrollY > 50 && !navStyle) {
        setNavStyle(true);
      } else if (window.scrollY <= 50 && navStyle) {
        setNavStyle(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navStyle]);

  const language: Languages = useClientInter()

  const texts =  Dictionaries[language]

  return (
    <React.Fragment>
      <header className={`fixed w-screen transition flex top-0 left-0 justify-center items-center z-30 dark:text-zinc-50 ${navStyle ? ' bg-zinc-50 shadow-lg  dark:bg-zinc-900 ' :' '}`}>
        <Container>
          <nav className="flex items-center justify-between lg:justify-center h-20 gap-x-12 font-light">
              <div className="hidden lg:block">
                <Anch href="/#about-me" className={`text-md leading-6`}>{texts.aboutMe}</Anch>
                <Gradientline/>
              </div>
              <div className="hidden lg:block">
                <Anch href="/projects" className={`text-md leading-6`}>{texts.jobs}</Anch>
                <Gradientline/>
              </div>
              <div className="hidden lg:block">
                <Anch href="/technologies" className={`text-md leading-6`}>{texts.technologies}</Anch>
                <Gradientline/>
              </div>
              <DropdownMenu.Root >
                <DropdownMenu.Trigger asChild>
                  <div className="hidden lg:block">
                    <button className={`flex justify-center items-center text-md leading-6`} aria-label="Customise options">
                      {texts.language}
                    </button>
                    <Gradientline/>
                  </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className={`DropdownMenuContent mt-6 w-32 dark:bg-zinc-900 dark:tezt bg-zinc-50 lg:shadow-lg flex flex-col`} sideOffset={5}>
                    <DropdownMenu.Item className={`hover:bg-zinc-300 p-3 focus-visible:outline-none ${navStyle ? 'text-md leading-6' : 'dark:text-gray-300'}`}>
                      <Locale href="pt-br">Português</Locale>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={`hover:bg-zinc-300 p-3 focus-visible:outline-none ${navStyle ? 'text-md leading-6' : 'dark:text-gray-300'}`}>
                      <Locale href="en-us">English</Locale>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
              <div className="lg:block">
                <ToggleTheme/>
                <Gradientline/>
              </div>
              <button type="button" onClick={()=>setMobileMenuOpen(true)}  className={`lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all text-gray-700 `}>
                <span className="sr-only">Open main menu</span>
                <svg className={"h-7 w-9 text-yellow-50 stroke-black dark:stroke-white" }fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

          </nav>
        </Container>
        <div className={`text-black fixed justify-end w-full flex top-0 h-screen transition-all ${mobileMenuOpen ? "left-0" : "left-full"}`}>
          <div className="lg:hidden w-full h-full flex" role="dialog" aria-modal="true">
            <div onClick={()=>setMobileMenuOpen(false)} className='flex-1'></div>
            <div className=" inset-y-0 right-0 h-full w-full overflow-y-auto bg-white dark:bg-zinc-900 dark:text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
                <button onClick={()=>setMobileMenuOpen(false)}  type="button" className="-m-2.5 rounded-md p-2.5  text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg  className="h-6 w-6 dark:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="block">
                      <Anch href="/#about-me" className={`pl-3 text-md leading-6`}>{texts.aboutMe}</Anch>
                      <Gradientline/>
                    </div>
                    <div className="block">
                      <Anch href="/projects" className={`pl-3 text-md leading-6`}>{texts.jobs}</Anch>
                      <Gradientline/>
                    </div>
                    <div className="block">
                      <Anch href="/technologies" className={`pl-3 text-md leading-6`}>{texts.technologies}</Anch>
                      <Gradientline/>
                    </div>
                    <div onClick={()=>setMobileMenuLanguage(!mobileMenuLanguage)} >
                      <span className={`pl-3 text-md leading-6 cursor-pointer`}>{texts.language} </span>
                      <Gradientline/>
                      <div className={`pl-10 mt-2 transition-all overflow-hidden ${mobileMenuLanguage ? "h-20" : "h-0"}`}>
                        <Locale href="pt-br" className={`pl-3 text-md leading-6`}>Português</Locale>
                        <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-pink-400 to-pink-300'></div>
                        <Locale href="en-us" className={`pl-3 text-md leading-6`}>English</Locale>
                        <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-pink-400 to-pink-300'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Navbar
