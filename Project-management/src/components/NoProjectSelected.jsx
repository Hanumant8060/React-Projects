import React from 'react'
import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartProject}){
    return(
        <div className='w-2/3 text-center mt-20'>
            <img src={noProjectImage} alt="" className='w-[10rem] h-[10rem] object-contain mx-auto' />
            <h2 className='text-2xl font-bold text-gray-700 my-3'>No Project Selected</h2>
            <p className='text-gray-600 font-medium text-sm'>select a project or create a new one</p>
            <Button onClick={onStartProject}>Create New Project</Button>
        </div>
    )
}