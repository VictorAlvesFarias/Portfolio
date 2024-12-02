import { RepositorieEntity } from "@/interfaces/entities/repository-entity"

export async function GetProfileDatas() {
  const data: any = await fetch("https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/packagePreview.json", { cache: 'no-store' })

  const repos: RepositorieEntity = await data.json()
  console.log(repos)
  
  const technologies = repos.technologies.map(item => {
    console.log(`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/projects/${item.name.split(" ").join("-").toLocaleLowerCase()}`)
    return {
      name: item.name.split('.').slice(0, -1).join('.'),
      src: `https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/projects/${item.name.split(" ").join("-").toLocaleLowerCase()}`

    }
  })

  const response = {
    technologies
  }

  return response
}
