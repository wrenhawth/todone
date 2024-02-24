import { Task } from "../../lib/mockData"

type TaskListItemProps = {
    task: Task
}

export function TaskListItem(props: TaskListItemProps) {
    const { task } = props
    return (
        <li className="text-xl">
            <span className="rounded-full border-2 border-black w-4 h-4 border-solid inline-block" />
            <span className="pl-2">{task.title}</span>
        </li>
    )
}