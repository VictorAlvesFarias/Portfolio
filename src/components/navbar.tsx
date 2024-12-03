"use client"

import { useEffect, useState } from 'react'
import React from 'react';
import Container from './container';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Dictionaries from '../dictionaries/navbar.json'
import Anch from './anch';
import Gradientline from './gradient-line';
import ToggleTheme from './toggle-theme';
import useClientInter from '@/utils/hooks/use-client-inter';
import { Languages } from '../../i18n.config';
import Locale from './locale';

function Navbar() {
  const [navStyle, setNavStyle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuLanguage, setMobileMenuLanguage] = useState(false)

  useEffect(() => {
    const handleScroll: any = () => {
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

  const texts = Dictionaries[language]

  return (
    <React.Fragment>
      <header className={`fixed w-screen transition flex top-0 left-0 justify-center items-center z-30 ${navStyle ? ' bg-zinc-50 shadow-lg  dark:bg-zinc-900 ' : ' '}`}>
        <Container>
          <nav className="flex items-center font-semibold justify-between lg:justify-center h-20 gap-x-12 ">
            <Anch href="/#about-me" className="hidden lg:block">
              <span className={`text-md`}>{texts.aboutMe}</span>
              <Gradientline />
            </Anch>
            <Anch href="/#technologies" className="hidden lg:block">
              <span className={`text-md`}>{texts.technologies}</span>
              <Gradientline />
            </Anch>
            <Anch href="/#links" className="hidden lg:block">
              <span className={`text-md`}>{texts.links}</span>
              <Gradientline />
            </Anch>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <div className="hidden lg:block">
                  <button className={`flex justify-center items-center text-md`} aria-label="Customise options">
                    {texts.language}
                  </button>
                  <Gradientline />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className={`DropdownMenuContent mt-6 w-32 dark:bg-zinc-900  bg-zinc-50 lg:shadow-lg flex flex-col`} sideOffset={5}>
                  <DropdownMenu.Item className={`hover:bg-zinc-500 p-3 focus-visible:outline-none dark:text-white ${navStyle ? 'text-md' : ''}`}>
                    <Locale href="pt-br">Português</Locale>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className={`hover:bg-zinc-500 p-3 focus-visible:outline-none  dark:text-white ${navStyle ? 'text-md' : ''}`}>
                    <Locale href="en-us">English</Locale>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <div className="lg:block">
              <ToggleTheme />
              <Gradientline />
            </div>
            <button type="button" onClick={() => setMobileMenuOpen(true)} className={`lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all text-gray-700 `}>
              <span className="sr-only">Open main menu</span>
              <svg className={"h-7 w-9 text-yellow-50 stroke-black dark:stroke-white"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </nav>
        </Container>
        <div className={`fixed justify-end w-full flex top-0 h-screen transition-all ${mobileMenuOpen ? "left-0" : "left-full"}`}>
          <div className="lg:hidden w-full h-full flex" role="dialog" aria-modal="true">
            <div onClick={() => setMobileMenuOpen(false)} className='flex-1'></div>
            <div className=" inset-y-0 right-0 h-full w-full overflow-y-auto bg-white dark:bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
                <button onClick={() => setMobileMenuOpen(false)} type="button" className="-m-2.5 rounded-md p-2.5  ">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6 dark:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="flex flex-col gap-6">
                    <Anch href="/#about-me" onClick={() => setMobileMenuOpen(false)} className="block">
                      <span className={`text-md`}>{texts.aboutMe}</span>
                      <Gradientline />
                    </Anch>
                    <Anch href="/#technologies" onClick={() => setMobileMenuOpen(false)} className="block">
                      <span className={`text-md`}>{texts.technologies}</span>
                      <Gradientline />
                    </Anch>
                    <Anch href="/#links" onClick={() => setMobileMenuOpen(false)} className="block">
                      <span className={`text-md`}>{texts.links}</span>
                      <Gradientline />
                    </Anch>
                    <div onClick={() => setMobileMenuLanguage(!mobileMenuLanguage)}>
                      <span className={`pl-3 text-md cursor-pointer`}>{texts.language} </span>
                      <Gradientline />
                      <div className={`pl-10 flex flex-col gap-6 transition-all overflow-hidden ${mobileMenuLanguage ? "h-32" : "h-0"}`}>
                        <Anch href="pt-br" onClick={() => setMobileMenuOpen(false)} className="block mt-6">
                          <span className={`pl-3 text-md`}>Português</span>
                          <Gradientline />
                        </Anch>
                        <Anch href="en-us" onClick={() => setMobileMenuOpen(false)} className="block">
                          <span className={`pl-3 text-md`}>English</span>
                          <Gradientline />
                        </Anch>
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
