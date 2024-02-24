import { auth } from "@/auth"
import { placeholderDailyData, placeholderMonthlyData, placeholderWeeklyData } from "@/app/lib/mockData";

import { SignIn } from "@/app/ui/authComponents"
import { TaskList } from "@/app/ui/tasks/taskList";

export default async function Dashboard() {
  const session = await auth()
  if (session?.user == null) {
    return <SignIn />
  }
  const { user } = session

  return (
    <main className="flex-col items-center p-12">
      <h1 className="text-3xl">Welcome {session.user.name}</h1>
      <h2 className="text-2xl">Tasks</h2>
      <div className="grid grid-flow-row grid-cols-3 pt-24">
        <TaskList title="Monthly" tasks={placeholderMonthlyData} />
        <TaskList title="Weekly" tasks={placeholderWeeklyData} />
        <TaskList title="Daily" tasks={placeholderDailyData} />
      </div>
    </main>
  );
}
