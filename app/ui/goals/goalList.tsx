import prisma from "@/app/lib/prisma"
import { auth } from "@/auth"

export default async function GoalList() {
    const session = await auth()
    if (session?.user == null) {
        return null
    }
    const goals = await prisma.goal.findMany({
        where: { userId: session.user.id }
    })

    return <ul>
        {goals.map((g) => <li key={g.id}>{g.title}</li>)}
    </ul>

}