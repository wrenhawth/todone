import { TaskListItem } from "./taskListItem"
import { Task } from "../../lib/mockData"

type GoalListProps = {
    title: string
    tasks: Task[]
}

export function TaskList(props: GoalListProps) {
    const { tasks, title } = props
    return (
        <div key={title}>
          <h2 className="text-2xl">{title}</h2>
          <ul className="pt-4">
            {tasks.map((task) =>
              <TaskListItem key={task.title} task={task} />
            )}
          </ul>
        </div>
    )
}