const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456',
    },
];

const goals = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        title: "Write 100 words",
        start_date: '2024-01-01',
        end_date: '2025-01-01',
        status: 'active',
        cadence: 'day',
        repeat_every: 1
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        title: "Language Practice",
        start_date: '2024-01-01',
        end_date: '2025-01-01',
        status: 'active',
        cadence: 'day',
        repeat_every: 1

    },
    {
        id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        title: "Parkour",
        start_date: '2024-01-01',
        end_date: '2025-01-01',
        status: 'active',
        cadence: 'day',
        repeat_every: 2
    }
]

module.exports = {
    goals,
    users,
};
