import dotenv from 'dotenv'
import NextAuth, { NextAuthConfig } from "next-auth"
import Discord from "next-auth/providers/discord"
import PostgresAdapter from "@auth/pg-adapter"
import { createPool } from '@vercel/postgres'

dotenv.config()

const pool = createPool()

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    providers: [Discord({
        clientId: process.env.DISCORD_CLIENT_ID ?? "",
        clientSecret: process.env.DISCORD_CLIENT_SECRET ?? ""
    })],
    adapter: PostgresAdapter(pool),
    secret: process.env.NEXTAUTH_SECRET ?? "",
    session: {
        strategy: "jwt",
        secret: process.env.NEXTAUTH_SECRET
    }
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    //   }
} as NextAuthConfig)