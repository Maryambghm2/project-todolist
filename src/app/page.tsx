'use client'
import TaskForm from "@/components/task/TaskForm";
import TaskList from "@/components/task/TaskList";
import { Tasks } from "@/components/Tasks";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";

export default function Home() {
    
    const { tasks, loading, error, addTask, deleteTask } = useTasks(); 
  
    if (loading) return <p>Chargement...</p>; 
    if (error) return <p>Erreur: {error}</p>; 
  

  return (
    <main>
      <div className="p-4">
        <h1 className="text-2xl mb-4">Ma Liste de Tâches</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </main>
  );
}