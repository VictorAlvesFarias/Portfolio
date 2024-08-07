import { RepositorieEntity } from "@/interfaces/entities/repository-entity"

export async function GetProfileDatas() {
    const data:any =  await fetch("https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/packagePreview.json",{ cache: 'no-store' }) 
    
    const repos:RepositorieEntity = await data.json()

    const technologies = repos.technologies.map(item=>{
      return {
          name:item.name,
          src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/projects/${item.name.split(" ").join("-").toLocaleLowerCase()}.svg`
      }
    })

    const projects = repos.projects.map(item=>{
      return {
        ...item,
        icon: `https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${item.name.split(" ").join("-").toLocaleLowerCase()}/icon-view.png`,
        images:[
          {src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${item.name.split(" ").join("-").toLocaleLowerCase()}/view-1.png`},
          {src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${item.name.split(" ").join("-").toLocaleLowerCase()}/view-2.png`},
          {src:`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/views/${item.name.split(" ").join("-").toLocaleLowerCase()}/view-3.png`},
        ]
      }
    })

    const response = {
      projects,
      technologies
    }

    return  response 
  }
