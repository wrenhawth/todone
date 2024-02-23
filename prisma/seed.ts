import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const goals: Prisma.GoalCreateWithoutUserInput[] = [
    {
        title: "Write 100 words",
        cadence: 'DAY',
        repeatEvery: 1
    },
    {
        title: "Language Practice",
        cadence: 'DAY',
        repeatEvery: 1
    },
    {
        title: "Parkour",
        cadence: 'DAY',
        repeatEvery: 2
    }
]

async function main() {
    const testUser = await prisma.user.create({
        data: {
            email: "test@example.com",
            name: "Test Tester",
            id: "test",
            goals: {
                create: goals
            }
        },
    })
    console.log(testUser)
}

main()

    .then(async () => {

        await prisma.$disconnect()

    })

    .catch(async (e) => {

        console.error(e)

        await prisma.$disconnect()

        process.exit(1)

    })