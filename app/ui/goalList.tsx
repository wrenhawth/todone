import { Task } from "../lib/mockData"
import { GoalListItem } from "./goalListItem"

type GoalListProps = {
    title: string
    tasks: Task[]
}

export function GoalList(props: GoalListProps) {
    const { tasks, title } = props
    return (
        <div key={title}>
          <h2 className="text-2xl">{title}</h2>
          <ul className="pt-4">
            {tasks.map((task) =>
              <GoalListItem key={task.title} task={task} />
            )}
          </ul>
        </div>
    )
}