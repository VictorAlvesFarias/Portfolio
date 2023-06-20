"use client"

import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import { eyeIcon } from '../../public';

interface ProjectCardProps {
  repo:{
    name: string;
    description:string;
    date:string;
    href:string;
  }
}

function ProjectCard(props:ProjectCardProps) {
	const [toggler, setToggler] = useState(false);

  return (
      <div className="flex gap-3 items-center  lex-1 p-4 rounded-sm bg-zinc-200 shadow-lg ">
        <Lightbox
          open={toggler}
          close={() => setToggler(false)}
          plugins={[Counter]}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          slides={[
            {src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${props.repo.name.split(" ").join("-").toLocaleLowerCase()}/view-1.png`},
            {src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${props.repo.name.split(" ").join("-").toLocaleLowerCase()}/view-2.png`},
            {src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${props.repo.name.split(" ").join("-").toLocaleLowerCase()}/view-3.png`}
        ]}
        /> 
        <div className=' flex items-center justify-center bg-zinc-200 rounded-sm shadow-black  w-20 h-20'>
            <Image width={50} height={50} className='w-10 h-10' src={`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${props.repo.name.split(" ").join("-").toLocaleLowerCase()}/icon-view.png`} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className="flex justify-between items-center">
              <p className='font-semibold'>{props.repo.name} </p>
              <Image className='cursor-pointer ml-3' width={25} height={25}  onClick={()=>setToggler(!toggler)} src={eyeIcon} alt={''}></Image>
            </div>
            <p>{props.repo.description}</p>
            <a target='_blank' href={props.repo.href} className='font-semibold'>Ir para o site...</a>
        </div>
      </div>
  )
}

export default ProjectCard