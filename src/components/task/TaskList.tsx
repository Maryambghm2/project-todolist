import { useTasks } from "@/hooks/useTasks";
import TaskCard from "./TaskCard";
import { TaskListProps } from "../Tasks";



export default function TaskList({ tasks, onDeleteTask }: TaskListProps) {

    return (
        <div className="flex flex-col gap-2">
            <ul>
            {tasks.map(task => (
                <TaskCard key={task.id}  task={task} onDelete={onDeleteTask} />
            ))}
            </ul>
        </div>
    );
}
