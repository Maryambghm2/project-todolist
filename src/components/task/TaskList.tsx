import { useTasks } from "@/hooks/useTasks";
import TaskCard from "./TaskCard";
import { TaskListProps } from "../Tasks";

export default function TaskList({ tasks, onDeleteTask, onUpdateTask, onToggleComplete }: TaskListProps) {

    const incompleteTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="flex flex-col gap-2 text-black">
            <ul className="rounded shadow-lg">

                {incompleteTasks.map(task => (
                    <TaskCard key={task.id} task={task} onDelete={onDeleteTask} onUpdate={onUpdateTask} onToggleComplete={onToggleComplete} />
                ))}

                {completedTasks.map(task => (
                    <TaskCard key={task.id} task={task} onDelete={onDeleteTask} onUpdate={onUpdateTask} onToggleComplete={onToggleComplete} />
                ))}
            </ul>
        </div>
    );
}
