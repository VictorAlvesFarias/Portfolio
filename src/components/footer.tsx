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
import useServerInter from '@/utils/hooks/use-server-inter'
import { GetProfileDatas } from '@/services/profile-service'
import Dictionaries from '../dictionaries/footer.json'

async function Footer() {
    const repos: any = await GetProfileDatas()
    const language = useServerInter()
    const texts = Dictionaries[language]

    return (
        <footer className="relative  z-30 items-center w-full justify-center flex flex-col my-20 border-t-2 border-zinc-300 dark:border-zinc-800">
            <div className="max-w-128 w-11/12 lg:px-0 px-5 flex flex-col gap-8 ">
                <h2 className="w-full sm:min-w-min flex justify-start sm:justify-center text-lg lg:text-2xl mt-8">
                    <div className=' font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600 ml-2 '>{texts.title}</div>
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