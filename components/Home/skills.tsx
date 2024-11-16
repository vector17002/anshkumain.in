import { Badge } from '../ui/badge'
import { skills } from '@/lib/constants'

const Skills = () => {
  return (
    <div id='skills' className='w-full flex flex-col mx-2 mt-10'>
        <p className='text-2xl md:text-4xl font-extrabold'>Skills</p>
        <div className='flex flex-wrap gap-3 mt-10 text-lg'>
            {skills.map((skill) => (
                <Badge className='px-2 py-1 rounded-xl' key={skill}>{skill}</Badge>
            ))}
        </div>
    </div>
  )
}

export default Skills