import { projects } from "@/lib/constants"
import ProjectCard from "../projectCard"

const Project = () => {
  return (
    <div id='skills' className='w-full flex flex-col mx-2 mt-10'>
        <p className='text-2xl md:text-4xl font-bold'>Projects</p>
        <div className='grid grid-cols-2 gap-8 mt-10'>
            {projects?.map((project) => (
                <ProjectCard project={project}/>
            ))}
        </div>
    </div>
  )
}

export default Project