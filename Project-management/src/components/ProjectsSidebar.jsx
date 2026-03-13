import React from 'react';
import Button from './Button';

export default function ProjectsSidebar({ onStartProject, projectList, onSelectedProject }) {
    return (
        <aside className='w-[20rem] px-4 py-16 bg-gray-900 text-stone-100 rounded-r-xl mt-8'>
            <h2 className='text-xl mb-4 font-bold uppercase'>Your Projects</h2>
            <Button onClick={onStartProject}>+ Add Projects</Button>
            <ul>
                {projectList.map(project => (
                    <li key={project.id}>
                        <button onClick={() => onSelectedProject(project.id)}>
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
