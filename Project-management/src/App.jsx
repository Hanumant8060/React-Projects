import React, { useState } from 'react';
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        id: Math.random().toString(),
        ...projectData,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
        // selectedProjectId: newProject.id, // generate a random id for the project
      }
    })
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    })
  }

  function handleDeleteProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== projectId),
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddTask(taskText) {
    setProjectState(prevState => {
      const newTask = {
        id: Math.random().toString(),
        text: taskText,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  function handleClearTask(taskId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      }
    })
  }

  let content;
  console.log(projectState)
  content = <SelectedProject
    projectList={projectState.projects}
    selectedProjectId={projectState.selectedProjectId}
    onDeleteProject={handleDeleteProject}
    tasks={projectState.tasks}
    addTask={handleAddTask}
    clearTask={handleClearTask} />

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelProject} />
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }

  return (
    <main className='flex h-screen text-stone-100'>
      <ProjectsSidebar
        onStartProject={handleStartProject}
        projectList={projectState.projects}
        onSelectedProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
