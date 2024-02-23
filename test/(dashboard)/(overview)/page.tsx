export default function Dashboard() {
  return (
    <main className="flex-col items-center p-12">
      <h1 className="text-3xl">Tasks</h1>
      <div className="grid grid-flow-row grid-cols-3 pt-24">
        {/* <GoalList title="Monthly" tasks={placeholderMonthlyData} />
        <GoalList title="Weekly" tasks={placeholderWeeklyData} />
        <GoalList title="Daily" tasks={placeholderDailyData} /> */}
      </div>
    </main>
  );
}
