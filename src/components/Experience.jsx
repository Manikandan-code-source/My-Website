/* eslint-disable react/jsx-key */
import {EXPERIENCES} from "../constants";


const Experience = () => {
  return (
    <div className='border-b border-neutral-900 lg:pb-4'>
        <h1 className='my-20 text-4xl text-center'>Experience</h1>
        <div>{EXPERIENCES.map((exp) =>(
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                <p className='text-sm text-neutral-400'>{exp.year}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                <p className='mb-4 font-semibold'>
                    {exp.role} - <span className='text-[20px] text-purple-400'>{exp.company}</span>
                </p>
                <p className='mb-4 text-neutral-400'> {exp.description}</p>
                {exp.technologies.map((tech,index) =>(
                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400' key={index}>{tech}</span>
                ))}
                </div>
            </div>
        ))}</div>
    </div>
  )
}

export default Experience