"use client"

import { useEffect, useState } from 'react'
import React from 'react';
import Container from './Container';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import Locale from '@/components/Locale';
import Texts from '../../internationalization/navbar.json'
import useClientInter from '@/utils/hooks/useClientInter';
import Anch from './Anch';
import type { Languages } from '../../i18n.config';

function Navbar() {

  const [navStyle, setNavStyle] = useState(false);

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

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

  const texts =  Texts[language]

  return (
    <React.Fragment>
      <header className={"fixed w-screen transition flex top-0 left-0 justify-center items-center z-30 " + (navStyle ? ' lg:bg-zinc-50 lg:shadow-lg  lg:text-black' :'')}>
        <Container>
          <nav className="flex items-center justify-between h-20 " >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" onClick={()=>setMobileMenuOpen(true)}  className={"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all text-gray-700 "+ (navStyle ? "bg-zinc-100 r" : "")}>
                <span className="sr-only">Open main menu</span>
                <svg className="h-7 w-9" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={navStyle ? ' black' :'white'} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 font-light">
              <div>
                <Anch href="/#about-me" className="text-md leading-6 text-zinc">{texts.aboutMe}</Anch>
                <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
              </div>
              <div>
                <Anch href="/projects" className="text-md leading-6 text-zinc">{texts.jobs}</Anch>
                <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
              </div>
              <div>
                <Anch href="/#technologies" className="text-md leading-6 text-zinc">{texts.technologies}</Anch>
                <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
              </div>
              <DropdownMenu.Root >
                <DropdownMenu.Trigger asChild>
                  <div>
                    <button className="flex justify-center items-center text-md leading-6 text-zinc " aria-label="Customise options">
                      {texts.language}
                    </button>
                    <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
                  </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="DropdownMenuContent mt-6 p-5 lg:bg-zinc-50 lg:shadow-lg flex flex-col gap-3 " sideOffset={5}>
                    <DropdownMenu.Item>
                      <Locale href="pt-br" className="text-md leading-6">Português</Locale>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">
                      <Locale href="en-us" className="text-md leading-6">English</Locale>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            </div>
          </nav>
        </Container>
        <div onClick={()=>setMobileMenuOpen(false)} className={' text-black fixed justify-end w-full flex top-0 h-screen transition-all '+(mobileMenuOpen?"left-0":"left-full")/* +(navStyle ? ' pt-16' :' pt-20 ') */}>
          <div className="lg:hidden w-full h-full flex flex-col items-end" role="dialog" aria-modal="true">
            <div className=" inset-y-0 right-0 h-full w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div>
                      <Anch href="/#about-me" className="text-md leading-6 text-zinc">{texts.aboutMe}</Anch>
                      <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
                    </div>
                    <div>
                      <Anch href="/projects" className="text-md leading-6 text-zinc">{texts.jobs}</Anch>
                      <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
                    </div>
                    <div>
                      <Anch href="/#technologies" className="text-md leading-6 text-zinc">{texts.technologies}</Anch>
                      <div className='w-full h-[3px] mt-2 bg-gradient-to-r from-rose-400 to-fuchsia-700 '></div>
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