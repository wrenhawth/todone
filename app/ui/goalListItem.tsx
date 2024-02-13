import { Task } from "../lib/mockData"

type GoalListItemProps = {
    task: Task
}

export function GoalListItem(props: GoalListItemProps) {
    const { task } = props
    return (
        <li className="text-xl">
            <span className="rounded-full border-2 border-black w-4 h-4 border-solid inline-block" />
            <span className="pl-2">{task.title}</span>
        </li>
    )
}