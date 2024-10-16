import Button from "../button";
import { TaskCardProps } from "../Tasks";

export default function TaskCard({task, onDelete }: TaskCardProps) {
    return (
        <li className="flex justify-between items-center border p-2 rounded">
            <span>{task.content}</span>
            <Button  onClick={() => onDelete(task.id)} label='X' type="button"/>
        </li>
    );
}
