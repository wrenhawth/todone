import { auth } from "@/auth"
import { SignIn } from "@/app/ui/auth-components"
import { placeholderDailyData, placeholderMonthlyData, placeholderWeeklyData } from "@/app/lib/mockData";
import { GoalList } from "@/app/ui/goalList";

export default async function Dashboard() {
  const session = await auth()
  if (session?.user == null) {
    return <SignIn />
  }
  return (
    <main className="flex-col items-center p-12">
      <h1 className="text-3xl">Welcome {session.user.name}</h1>
      <h2 className="text-2xl">Tasks</h2>
      <div className="grid grid-flow-row grid-cols-3 pt-24">
        <GoalList title="Monthly" tasks={placeholderMonthlyData} />
        <GoalList title="Weekly" tasks={placeholderWeeklyData} />
        <GoalList title="Daily" tasks={placeholderDailyData} />
      </div>
    </main>
  );
}
