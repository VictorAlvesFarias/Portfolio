import React from 'react'
import Image from 'next/image'
import {
    profileImg,
    githubPictureIcon,
    linkedinPictureIcon,
    nextJsIcon,
    talwindIcon,
    typescriptIcon
} from "../../public/public-modules"

function Footer() {
    return (
        <footer className="border-t-2 border-zinc-300 dark:border-zinc-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col gap-8">
                <h2 className="w-full sm:min-w-min flex justify-start sm:justify-center text-lg lg:text-2xl ">
                    <div className=' font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600 ml-2 '>THANK YOU FOR COMING HERE</div>
                </h2>
                <hr className="border-zinc-300 dark:border-zinc-800" />
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-semibold'>E-mail</h1>
                        <p>victoralves.contact@glafyros.com</p>
                    </div>
                </div>
                <hr className="border-zinc-300 dark:border-zinc-800" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm ">© 2024. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer