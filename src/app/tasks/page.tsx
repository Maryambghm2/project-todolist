'use client'
import Button from "@/components/button";
import Modal from "@/components/modal";
import TaskForm from "@/components/task/TaskForm";
import TaskList from "@/components/task/TaskList";
import { useTasks } from "@/hooks/useTasks";
import Link from "next/link";
import { useState } from "react";

export default function TasksPage() {

  const { tasks, loading, error, addTask, deleteTask, updateTask, toggleTaskCompletion } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;


  return (
    <main>
      <div className="p-4 min-h-screen">
        <Link href={'/tasks'}>
          <h1 className="text-2xl font-bold text-black mb-4">Ma Liste de Tâches</h1>
        </Link>
        <div className="flex justify-center mb-4">
          <Button label="Ajouter Tâche" onClick={() => setIsModalOpen(true)} />
        </div>
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} onToggleComplete={toggleTaskCompletion} />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
          <TaskForm onAddTask={(newTask) => { addTask(newTask); setIsModalOpen(false); }} />
        </Modal>
      </div>
    </main>
  );
}