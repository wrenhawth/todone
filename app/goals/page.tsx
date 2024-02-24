import { auth } from "@/auth";
import { TaskList } from "../ui/tasks/taskList";
import GoalList from "../ui/goals/goalList";

export default async function Goals() {
  const session = await auth()

  if (session?.user == null) {
    return null
  }

  return (
    <main className="flex-col items-center p-12">
      <h1 className="text-3xl">Welcome {session.user.name}</h1>
      <h2 className="text-2xl">Goals</h2>
      <div className="grid grid-flow-row grid-cols-3 pt-24">
        <GoalList />
      </div>
    </main>
  );
}
