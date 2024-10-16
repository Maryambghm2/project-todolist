import { Tasks } from "@/components/Tasks"
import { useEffect, useState } from "react"

export const useTasks = () => {
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    // GET AFFICHAGE TASKS 
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/tasks');
                if (!response.ok) throw new Error('Erreur lors du chargement des tâches');
                const data = await response.json();
                setTasks(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError((error as Error).message);
            }
        };

        fetchTasks();
    }, []);


    // AFFICHAGE POST TASKS 
    const addTask = async (newTask: Omit<Tasks, 'id'>) => {
        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });


            if (!response.ok) throw new Error("Erreur lors de l'ajout de la tâche");

            const data = await response.json();

            const createdTask = data.task;

            if (createdTask) {
            setTasks((prevTasks) => [...prevTasks, createdTask]);
                
            }

        } catch (error) {
            setError((error as Error).message);
        }
    };


    // SUPPRESSION TASK 
    const deleteTask = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Erreur lors de la suppression de la tâche');

            setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return { tasks, loading, error, addTask, deleteTask };

};