import { RepositorieEntity } from "@/interfaces/entities/repository-entity"

export async function GetProfileDatas() {
  const data: any = await fetch("https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/packagePreview.json", { cache: 'no-store' })

  const repos: RepositorieEntity = await data.json()

  const technologies = repos.technologies.map(item => {
    return {
      name: item.name,
      src: `https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/projects/${item.name.split(" ").join("-").toLocaleLowerCase()}.${item.name.split('.')[item.name.split('.').length - 1]}`
    }
  })

  const response = {
    technologies
  }

  return response
}
