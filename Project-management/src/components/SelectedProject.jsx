import Task from "./Task";

export default function SelectedProject({ projectList, selectedProjectId, onDeleteProject, tasks = [], addTask, clearTask }) {
    const formattedDate = new Date(projectList.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    const project = projectList.find(project => project.id === selectedProjectId);
    console.log(project, "selected project")
    // filter tasks belonging to this project (tasks may be simple strings or objects)
    const projectTasks = tasks.filter(t => {
        if (!t) return false;
        if (typeof t === 'string') return true; // keep string entries
        return t.projectId === selectedProjectId;
    });
    return (
        <div className="d-block p-4 mt-8 w-[32rem] h-[20rem] text-stone-50 rounded-md bg-stone-400 ">
            <header className="flex justify-between items-center mb-4  bg-stone-700">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <button onClick={() => { onDeleteProject(selectedProjectId) }}>Delete</button>
            </header>
            <p className="text-stone-50 mb-4">{project.description}</p>
            <p className="text-stone-50 mb-4 border-b-2 border-stone-700">Due Date: {project.dueDate}</p>

            <Task taskList={projectTasks} addTask={addTask} clearTask={clearTask} />
        </div>

    )
}