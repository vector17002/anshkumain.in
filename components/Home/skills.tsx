import Image from 'next/image'
import { Badge } from '../ui/badge'
import { skills } from '@/lib/constants'

const Skills = () => {
  return (
    <div id='skills' className='w-full flex flex-col mx-2 mt-10'>
        <p className='text-2xl md:text-4xl font-bold'>Skills</p>
        <div className='flex flex-wrap gap-3 mt-10 text-lg'>
            {skills.map((skill) => (
              <div key={skill.name} className='flex w-full h-full'>
                <p>{skill.name}</p>
                <img src={skill.icon} alt={skill.name}/>
               </div>
            ))}
        </div>
    </div>
  )
}

export default Skills