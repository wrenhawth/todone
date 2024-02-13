const { sql } = require('@vercel/postgres');
const {
    users,
    goals
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers() {
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}


async function seedGoals() {
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // await sql`create type cadence AS ENUM ('day', 'week', 'month');`
        // await sql`create type status as ENUM ('active', 'inactive')`

        // Create the "goals" table if it doesn't exist
        const createTable = await sql`
            CREATE TABLE IF NOT EXISTS goals (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL,
            cadence cadence NOT NULL,
            repeat_every int NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL
            );
  `;

        console.log(`Created "goals" table`);

        // Insert data into the "invoices" table
        const insertedGoals = await Promise.all(
            goals.map(
                (goal) => sql`
                INSERT INTO goals (id, title, status, cadence, repeat_every, start_date, end_date)
                VALUES (${goal.id}, ${goal.title}, ${goal.status}, ${goal.cadence}, ${goal.repeat_every}, ${goal.start_date}, ${goal.end_date})
                ON CONFLICT (id) DO NOTHING;
        `,
            ),
        );

        console.log(`Seeded ${insertedGoals.length} goals`);

        return {
            createTable,
            goals: insertedGoals,
        };
    } catch (error) {
        console.error('Error seeding goals:', error);
        throw error;
    }
}

(async () => {
    await seedGoals();
})();